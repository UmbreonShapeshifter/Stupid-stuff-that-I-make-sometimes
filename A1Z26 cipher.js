const letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = new Promise(function(resolve,reject) {
    readline.question(`Please input a string:\n`, answer => {
        const subAnswer = (answer.toLowerCase()).split("");
        let workingAnswer = [];

        for (let i = 0; subAnswer.length < i; i++) {
            workingAnswer.push(letters.indexOf(answer[i]) != -1);
        }

        resolve(workingAnswer.join(""));
    });
});

console.log(await answer);