const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to CodeEvolution`));
}

greet('Ashraf');
module.exports = greet;