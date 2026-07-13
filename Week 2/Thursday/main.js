const readline = require('readline');
const ExpenseManagement = require('./expenseManagement');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Using the async-iterator form (instead of rl.question) so this also works
// correctly when input is piped in (e.g. for automated testing), not just typed live.
const lines = rl[Symbol.asyncIterator]();

const ask = async (question) => {
    process.stdout.write(question);
    const { value, done } = await lines.next();
    return done ? '' : value;
};

function printMenu() {
    console.log('===== Expense Tracker =====');
    console.log('1. Add expense');
    console.log('2. Delete expense');
    console.log('3. View all expenses');
    console.log('4. View remaining balance');
    console.log('5. Add more budget');
    console.log('6. Exit');
}

async function mainMenu() {
    const userName = await ask('Enter your name: ');
    const budget = Number(await ask('Enter your budget: '));
    let tracker;

    try {
        tracker = new ExpenseManagement(budget, userName);
    } catch (err) {
        console.log('Error: ' + err.message);
        rl.close();
        return;
    }

    let running = true;

    while (running) {
        printMenu();
        const choice = (await ask('Choose an option (1-6): ')).trim();

        if (choice === '1') {
            const category = await ask('Category: ');
            const amount = Number(await ask('Amount: '));
            try {
                tracker.addExpense(category, amount);
            } catch (err) {
                console.log('Error: ' + err.message);
            }
        } else if (choice === '2') {
            const category = await ask('Category to delete: ');
            tracker.deleteExpense(category);
        } else if (choice === '3') {
            tracker.viewExpenses();
        } else if (choice === '4') {
            console.log('Remaining balance: ' + tracker.remainingBalance);
        } else if (choice === '5') {
            const newBudget = Number(await ask('New budget: '));
            try {
                tracker._budget += newBudget;
                console.log('Budget updated.');
            } catch (err) {
                console.log('Error: ' + err.message);
            }
        } else if (choice === '6') {
            console.log('Goodbye!');
            running = false;
        } else {
            console.log('Invalid option, try again.');
        }
    }

    rl.close();
}

mainMenu();