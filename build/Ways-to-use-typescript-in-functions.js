"use strict";
function getUpper(val) {
    return val.toUpperCase(); //can only use string methods as it is string
}
function increment(n) {
    // Normal function
    return n + 1;
}
let incrementArrow = (n) => {
    // Arrow function
    return n + 1;
};
const value2 = [1, 2, 3, 4, 5];
value2.map((x) => {
    return x.toString(); // error: we are expecting number but returning string
});
