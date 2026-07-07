function changeText(){
    document.getElementById('demo').innerText = 'Hello World!';
};

function changeFontStyle(){
    document.getElementById('demo').style.fontStyle = 'oblique';
};

function hideText(){
    document.getElementById('demo').style.display = 'none';
};

// Function Declaration
function addDeclaration(a, b) {
    return a + b;
}

// Function Expression
const addExpression = function (a, b) {
    return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(addDeclaration(2, 3)); // 5
console.log(addExpression(2, 3));  // 5
console.log(addArrow(2, 3));       // 5

// Block Scope vs Function Scope
function scopeDemo() {
    var a = 1; // function-scoped
    let b = 2; // block-scoped

    if (true) {
        var c = 3; // leaks out of the block (function-scoped)
        let d = 4; // stays inside the block
    }

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    // console.log(d); // ReferenceError: d is not defined
}
scopeDemo();

// Closure Counter
function createCounter() {
    let count = 0; // private variable, only accessible via the returned functions

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = 0;
            return count;
        },
        value: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.value());     // 2
console.log(counter.reset());     // 0