let value3: number | string = 33;
value3 = 44;
value3 = "55";

type User2 = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let harsh: User2 | Admin = { name: "hitesh", id: 7 };
harsh = { username: "harsh yadav", id: 12 };

// union in arrays
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let gender: "male" | "female";
let person: gender = "any other"; // This will give error as there can be only male or female
