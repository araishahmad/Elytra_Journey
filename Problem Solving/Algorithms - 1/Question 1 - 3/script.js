// isPalindrome
function isPalindrome() {
    let str1 = 'racecar';
    let size = (str1.length) - 1;
    let str2 = '';

    for (let i = size; i >= 0; i--) {
        str2 += str1[i];
    }

    if (str1 === str2)
        return true;

    else
        return false;
}

console.log(isPalindrome());

// reverse string without using .reverse()
function reverseStr() {
    let str = 'hello';
    let size = (str.length) - 1;
    let str2 = '';

    for (let i = size; i >= 0; i--)
        str2 += str[i];

    return str2;
}

console.log(reverseStr());

// Fizzbuzz rule
function fizzBuzz() {


    for (let i = 1; i <= 50; i++) {
        let isFizz = false;
        let isBuzz = false;
        let isFizzBuzz = false;

        if (i % 3 === 0) {
            console.log('Fizz');
            isFizz = true;
        }

        if (i % 5 === 0) {
            console.log('Buzz');
            isBuzz = true;
        }

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            isFizzBuzz = true;
        }

        if (!isFizz && !isBuzz && !isFizzBuzz)
            console.log(i);
    }
}

fizzBuzz();