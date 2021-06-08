const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What do you want me to say? \n   `, answer => {
    if (answer.toLowerCase() == `i am stupid`) {

        console.log(`I know you are, but what am I?`);
        process.exit();
    } else {
        console.log(answer);
        process.exit();
    }
})
