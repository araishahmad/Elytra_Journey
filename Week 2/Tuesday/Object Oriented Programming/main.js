const Animal = require('./Animal');
const BankAccount = require('./BankAccount');

const cat = new Animal('Koko', 'RagDoll');
console.log(cat.meow());

const account = new BankAccount('Araish', 33);

console.log(account.welcome());
console.log(account.cName);
console.log(account.cId);

account.cName = 'Ahmad';
account.cId = 34;

console.log(account.welcome());