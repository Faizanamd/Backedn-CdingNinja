

const readline = require('readline');

const interface = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

interface.question("Enter first number", (num1) =>{
    interface.question("Enter second number ", (num2) =>{
        const sum = parseInt(num1)+parseInt(num2);
        console.log(sum);
    });
});

