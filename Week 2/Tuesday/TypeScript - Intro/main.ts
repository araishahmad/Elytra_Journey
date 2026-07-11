import Animal from './Animal';
import Cat from './Cat';
import BankAccount from './BankAccount';

const animal = new Animal('Jackie', 'Husky');
console.log(animal.intro());

const cat = new Cat('Koko', 'Scottish Fold', 'Meow Meow');
console.log(cat.intro());

const bankAccount = new BankAccount('Araish Ahmad', 33);
console.log(bankAccount.welcome());