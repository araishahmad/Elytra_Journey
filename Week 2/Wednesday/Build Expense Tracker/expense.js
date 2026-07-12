class Expense {
    constructor(category, amount) {
        this._category = category;
        this._amount = amount;
    }

    get _category() {
        return this.category;
    }

    set _category(category) {
        if (!category)
            throw new Error('Category is required');

        this.category = category;
    }

    get _amount() {
        return this.amount;
    }

    set _amount(amount) {
        if (amount < 0)
            throw new Error('Negative amount not allowed');

        this.amount = amount;
    }

    expenseMessage() {
        return `Expense of category ${this._category} for $${this._amount}`;
    }
}

module.exports = Expense;