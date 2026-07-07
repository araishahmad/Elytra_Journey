let fruits = ["Apple", "Banana"];

fruits.push("Mango");
fruits.push("Orange");

// Predict the final value of fruits: ["Apple", "Banana", "Mango", "Orange"]

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2[0] = 10;

// Predict the values of arr1 and arr2: [10, 2, 3] This happens because Array's address is copied

let x = 10;
let y = x;

y = 20;

// Predict the values of x and y: 10 20

let colors = ["Red", "Green", "Blue"];

let removed = colors.pop();

// Predict the values of colors and removed: Blue

let person = {
    name: "Ali",
    address: {
        city: "Lahore"
    }
};

let user = person;

user.address.city = "Karachi";

// Predict the values of person.address.city and user.address.city: Both Karachi