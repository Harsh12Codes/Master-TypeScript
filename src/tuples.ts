let value4: [string, number, boolean];
value4 = ["true", 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type Num = [number, string];
const value6: Num = [10, "ten"];

value6[1] = "twenty";
value6.push("thirty");
value6.push(40);
newUser.push(true); // i can push value but only of type string and number
