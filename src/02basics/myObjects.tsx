const User = {
    name: "John",
    age: 25,
    email: "john@gmail.com",
};

function createUser({ name, age, email }: { name: string; age: number; email: string }) {}

console.log(createUser({ name: "John", age: 25, email: "harsh@gmail.com" }));
function getUser(): { name: string; age: number; email: string } {
    return User;
}

//  type

type User = {
    name: string;
    age: number;
    email: string;
};

function createUser1(user: User) {}

console.log(createUser1({ name: "John", age: 25, email: "" }));

type Person = {
    readonly _id: string; // usecase of readonly
    age: number;
    email: string;
};

let person: Person = { _id: "1", age: 25, email: "1@gmail.com" };

person.age = 26;
// person._id = "2"; // error

type CreditCard = {
    cardNumber: number;
    expiryDate?: string; // usecase of optional
};

const creditCard = {
    cardNumber: 123456789,
};

type details = Person & CreditCard; // usecase of &
