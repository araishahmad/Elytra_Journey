// This file only wires the DOM to the Expense / ExpenseManagement classes
// (defined in Expense.js / ExpenseManagement.js) and to StorageService
// (defined in storageService.js). No business logic lives here.

let tracker = null;

const nameHeading = document.getElementById('name');
const expensesWindow = document.querySelector('.expenses-window');

async function persist() {
    await StorageService.saveState(tracker);
}

function renderSetup() {
    expensesWindow.innerHTML = `
        <h2>Get started</h2>
        <form id="setup-form">
            <label>
                Name
                <input type="text" id="name-input" required>
            </label>
            <label>
                Starting budget
                <input type="number" id="budget-input" required>
            </label>
            <button type="submit">Start Tracking</button>
        </form>
        <p class="error" id="error-msg"></p>
    `;

    document.getElementById('setup-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const userName = document.getElementById('name-input').value.trim();
        const budget = Number(document.getElementById('budget-input').value);

        try {
            tracker = new ExpenseManagement(budget, userName);
        } catch (err) {
            document.getElementById('error-msg').textContent = err.message;
            return;
        }

        nameHeading.textContent = tracker.userName;
        await persist();
        renderApp();
    });
}

function renderApp() {
    expensesWindow.innerHTML = `
        <p class="offline-banner" id="offline-banner" hidden>You're offline — changes are saved locally and will sync when you're back online.</p>
        <p class="sync-status" id="sync-status" hidden></p>

        <p class="balance" id="balance"></p>
        <p class="warning" id="over-budget" hidden>You are over budget.</p>

        <h2>Add expense</h2>
        <form id="add-form">
            <label>
                Category
                <input type="text" id="add-category" required>
            </label>
            <label>
                Amount
                <input type="number" id="add-amount" required>
            </label>
            <button type="submit">Add expense</button>
        </form>

        <h2>Delete expense</h2>
        <form id="delete-form">
            <label>
                Category
                <input type="text" id="delete-category" required>
            </label>
            <button type="submit">Delete</button>
        </form>

        <h2>Add more budget</h2>
        <form id="budget-form">
            <label>
                Amount
                <input type="number" id="budget-amount" required>
            </label>
            <button type="submit">Add budget</button>
        </form>

        <p class="error" id="error-msg"></p>

        <hr>

        <h2>Expenses</h2>
        <ul id="expenses-list"></ul>
    `;

    document.getElementById('add-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const category = document.getElementById('add-category').value.trim();
        const amount = Number(document.getElementById('add-amount').value);

        try {
            tracker.addExpense(category, amount);
            event.target.reset();
            await persist();

            if (!navigator.onLine) {
                await StorageService.queueAction({ type: 'addExpense', payload: { category, amount } });
            }

            await updateView();
        } catch (err) {
            showError(err.message);
        }
    });

    document.getElementById('delete-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const category = document.getElementById('delete-category').value.trim();
        const deleted = tracker.deleteExpense(category);

        if (!deleted) {
            showError(`No expense found for category: ${category}`);
        } else {
            await persist();

            if (!navigator.onLine) {
                await StorageService.queueAction({ type: 'deleteExpense', payload: { category } });
            }
        }

        event.target.reset();
        await updateView();
    });

    document.getElementById('budget-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const amount = Number(document.getElementById('budget-amount').value);

        try {
            tracker._budget += amount;
            event.target.reset();
            await persist();

            if (!navigator.onLine) {
                await StorageService.queueAction({ type: 'addBudget', payload: { amount } });
            }

            await updateView();
        } catch (err) {
            showError(err.message);
        }
    });

    updateView();
}

async function updateView() {
    document.getElementById('balance').textContent = `Remaining balance: $${tracker.remainingBalance}`;
    document.getElementById('over-budget').hidden = !tracker.isOverBudget();
    document.getElementById('error-msg').textContent = '';

    document.getElementById('offline-banner').hidden = navigator.onLine;

    const queue = await StorageService.getQueue();
    const syncStatus = document.getElementById('sync-status');
    if (queue.length > 0) {
        syncStatus.textContent = `${queue.length} change${queue.length === 1 ? '' : 's'} pending sync.`;
        syncStatus.hidden = false;
    } else {
        syncStatus.hidden = true;
    }

    const list = document.getElementById('expenses-list');
    list.innerHTML = '';

    if (tracker.expenses.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'No expenses yet.';
        list.appendChild(li);
        return;
    }

    tracker.expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = expense.expenseMessage();
        list.appendChild(li);
    });
}

function showError(message) {
    document.getElementById('error-msg').textContent = message;
}

// Sync happens client-side only here (no real backend): coming back online
// just confirms the already-applied local changes are persisted, then
// clears the pending queue so the "N changes pending sync" indicator drops.
window.addEventListener('online', async () => {
    const queue = await StorageService.getQueue();
    if (queue.length === 0) {
        if (tracker) await updateView();
        return;
    }

    await persist();
    await StorageService.clearQueue();

    if (tracker) await updateView();
});

window.addEventListener('offline', async () => {
    if (tracker) await updateView();
});

async function init() {
    const savedState = await StorageService.loadState();

    if (!savedState) {
        renderSetup();
        return;
    }

    tracker = new ExpenseManagement(savedState.budget, savedState.userName);
    savedState.expenses.forEach(expense => {
        tracker.addExpense(expense.category, expense.amount);
    });

    nameHeading.textContent = tracker.userName;
    renderApp();
}

init();