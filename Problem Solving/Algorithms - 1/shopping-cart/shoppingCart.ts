import { Item } from './item';

export class ShoppingCart {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(name: string): void {
        this.items = this.items.filter((item) => item.name !== name);
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    applyDiscount(percentage: number): number {
        const total = this.getTotal();
        return total - (total * percentage) / 100;
    }
}