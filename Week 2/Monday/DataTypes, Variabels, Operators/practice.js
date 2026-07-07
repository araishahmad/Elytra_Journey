// var (its value can be changed)
// let (its value can be changed but it declares a block variable, used in modern JS)
// const (its value remains unchanged once declared, used in modern JS. It is also block type)

// Type Coercion
parseInt("432") // output: 432
parseInt("12px4") // output: 12
parseFloat("43.2") // output: 43.2

let x = "10" - 2 + "3";

// Predict the value of x: 83

let x = 10 + "5" - 2;

// Predict the value of x: 103

let x = true + 2;
let y = false + 5;

// Predict the values of x and y: 3 and 5

let a = 10;

{
    let a = 20;
}

a = a + 5;

// Predict the value of a: 15

let x = 100;

{
    let x = 50;
    x = x + 10;
}

x = x - 20;

// Predict the value of x: 80

let x = 5;
let y = x++ + ++x;

// Predict the values of x and y: 12

let a = "5";
let b = 5;

let x = (a == b);
let y = (a === b);

// Predict the values of x and y: x = true and y = false