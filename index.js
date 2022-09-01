const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])
 
if (operation === 'add') {
    console.log((operator1 + operator2));
}
if (operation === 'subtract') {
    console.log( (operator1 - operator2));
}
if (operation === 'multiply') {
    console.log((operator1 * operator2));
}
if (operation === 'divide') {
    console.log((operator1 / operator2));
}

const crypto = require("crypto");
if (operation === 'random') {
    const n = crypto.randomInt(0, 1000);
    console.log(n);
}

if (operation === 'sin') {
    console.log(Math.sin(operator1));
}
if (operation === 'cos') {
    console.log(Math.cos(operator1));
}
if (operation === 'tan') {
    console.log(Math.tan(operator1));
}