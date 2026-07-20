export class ShoppingCart {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(name) {
        this.items = this.items.filter((item) => item.name !== name);
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
    applyDiscount(percentage) {
        const total = this.getTotal();
        return total - (total * percentage) / 100;
    }
}
