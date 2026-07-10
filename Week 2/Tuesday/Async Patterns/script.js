async function calculate (a, b){
    let add = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });

    let difference = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (a - b);
        }, 5000);
    });

    console.log('Waiting for addition');
    let sum = await add;

    console.log('Waiting for subtraction');
    let diff = await difference;

    return [sum, diff];
}

// async function display (promise){
//     const result = await promise;
//     console.log(result); 
// }

function display (promise){
    promise.then(result => console.log(result)); // Can be written this way too
}

display(calculate(4, 5));