// `Expense` doesn't need to be required here — expense.js is loaded first via
// <script> in index.html, so its top-level `class Expense` is already
// available as a global by the time this script runs.

class ExpenseManagement {
    constructor(budget, userName) {
        // this.userName = window.prompt('Enter your name: ');
        this.userName = userName;
        this._budget = budget;
        this.expenses = [];
    }
    
    get _budget() {
        return this.budget;
    }

    set _budget(budget) {
        if (budget < 0)
            throw new Error('Negative budget not allowed.');

        this.budget = budget;
    }

    get remainingBalance() {
        let totalSpent = 0;
        for (let i = 0; i < this.expenses.length; i++) { // I've checked this task can be done using
            totalSpent += this.expenses[i].amount;       // reduce function also
        }
        return this._budget - totalSpent;
    }

    isOverBudget (){
        return this.remainingBalance < 0;
    }

    addExpense(category, amount) {
        const newExpense = new Expense(category, amount);
        this.expenses.push(newExpense);
        console.log(newExpense.expenseMessage());
        return newExpense;
    }

    deleteExpense(category) {
        const index = this.expenses.findIndex(expense => expense.category === category);

        if (index === -1) {
            console.log(`No expense found for category: ${category}`);
            return false;
        }

        const newExpenses = [];
        for (let i = 0; i < this.expenses.length; i++){
            if (index !== i)
                newExpenses.push(this.expenses[i]); // This can also be performed using slicing
        }
        this.expenses = newExpenses;

        console.log(`Expense of category "${category}" deleted.`);
        return true;
    }

    viewExpenses() {
        console.log(`Expenses for ${this.userName}:`);
        this.expenses.forEach(expense => console.log(expense.expenseMessage()));
        console.log(`Remaining balance: $${this.remainingBalance}`);
    }
}

// Works both in Node (require/module.exports) and in the browser (global `ExpenseManagement`).
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExpenseManagement;
}
