let value: string | number;
value = 10;
value = "Hello";

function show(a: number | string): string {
    return `Value is ${a}`;
}

function display(a: number | string): void {
    if (typeof a === "number") {
        console.log(`Number: ${a}`);
    } else {
        console.log(`String: ${a}`);
    }
}

// union in arrays

let arr: (string | number)[] = ["Hello", 10, "World", 20];
console.log(arr);

let arr2: Array<string | number> = ["Hello", 10, "World", 20];
console.log(arr2);

let gender: "men" | "women";

gender = "men";
// gender = "animal"; // Error: Type '"animal"' is not assignable

// Tuples

let tuple: [string, number, boolean] = ["Hello", 10, true];

type UserX = [number, string, boolean];
let user: UserX = [1, "John", true];
console.log(user);

// edge case of tuple

let tuple2: [string, number] = ["Hello", 10];
// tuple2 = ["Hello", 10, "World"]; // Error: Type 'string' is not assignable to type 'undefined
tuple2.push("World");
tuple2.push("World");
console.log(tuple2);
// tuple2.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
