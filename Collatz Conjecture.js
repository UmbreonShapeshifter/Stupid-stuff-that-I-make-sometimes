let n = 0;
let previousN = [];
let actions = 0;

function storeActions () {
    previousN.push(n);
    actions++;    
}

while (n < 1) {
    n = Math.floor(Math.random() * 100);
}

console.log(n);

while (n != 1) {
    console.log("Repeat!");

    if (n % 2) {
         storeActions();
        n /= 2;
        console.log("Even number, divided in half!");
    } else {
         storeActions();
        n = n * 3 + 1
        console.log("Odd number, mutliplied by 3 then added 1!")
    }
}

console.log(`\n\nIt took ${actions} and the number Array is ${previousN}`);