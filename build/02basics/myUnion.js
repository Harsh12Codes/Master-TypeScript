"use strict";
let value;
value = 10;
value = "Hello";
function show(a) {
    return `Value is ${a}`;
}
function display(a) {
    if (typeof a === "number") {
        console.log(`Number: ${a}`);
    }
    else {
        console.log(`String: ${a}`);
    }
}
// union in arrays
let arr = ["Hello", 10, "World", 20];
console.log(arr);
let arr2 = ["Hello", 10, "World", 20];
console.log(arr2);
let gender;
gender = "men";
// gender = "animal"; // Error: Type '"animal"' is not assignable
// Tuples
let tuple = ["Hello", 10, true];
let user = [1, "John", true];
console.log(user);
// edge case of tuple
let tuple2 = ["Hello", 10];
// tuple2 = ["Hello", 10, "World"]; // Error: Type 'string' is not assignable to type 'undefined
tuple2.push("World");
tuple2.push("World");
console.log(tuple2);
// tuple2.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
