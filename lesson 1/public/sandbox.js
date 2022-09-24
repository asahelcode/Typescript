"use strict";
//Function
let greet;
greet = (user, location) => {
    //Adding ?: makes the parameter undefined
    console.log(`Hello, ${user}`);
};
greet('henry');
let multiply;
multiply = (num1, num2) => {
    return num1 * num2;
};
let result = multiply(10, 18);
console.log(result);
