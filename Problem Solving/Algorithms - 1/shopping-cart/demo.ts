import { ShoppingCart } from './shoppingCart';

const cart = new ShoppingCart();
cart.addItem({ name: "Shoes", price: 3000 });
cart.addItem({ name: "Shirt", price: 1500 });
cart.addItem({ name: "Belt", price: 800 });
cart.removeItem("Belt");

console.log(cart.getTotal());
console.log(cart.applyDiscount(10));