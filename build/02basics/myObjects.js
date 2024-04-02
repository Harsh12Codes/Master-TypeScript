"use strict";
const User = {
    name: "John",
    age: 25,
    email: "john@gmail.com",
};
function createUser({ name, age, email }) { }
console.log(createUser({ name: "John", age: 25, email: "harsh@gmail.com" }));
function getUser() {
    return User;
}
function createUser1(user) { }
console.log(createUser1({ name: "John", age: 25, email: "" }));
let person = { _id: "1", age: 25, email: "1@gmail.com" };
person.age = 26;
const creditCard = {
    cardNumber: 123456789,
};
