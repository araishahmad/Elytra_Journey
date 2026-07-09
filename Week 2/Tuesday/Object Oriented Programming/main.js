const Animal = require('./Animal');
const BankAccount = require('./BankAccount');
const Cat = require('./Cat')

const animal = new Animal ('Jackie', 'Husky');
console.log(animal.intro());

const cat = new Cat('Koko', 'RagDoll', 'Meow Meow');
console.log(cat.intro());

const account = new BankAccount('Araish', 33);

console.log(account.welcome());
console.log(account.cName);
console.log(account.cId);

account.cName = 'Ahmad';
account.cId = 34;

console.log(account.welcome());