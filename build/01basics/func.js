"use strict";
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(3));
function toUpper(str) {
    return str.toUpperCase();
}
console.log(toUpper("hello"));
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
const addThree = (num) => num + 3;
console.log(addThree(5));
// errors
const consoleError = (message) => {
    console.error(message);
};
const handleError = (message) => {
    throw new Error(message);
};
