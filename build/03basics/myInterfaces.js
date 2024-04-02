"use strict";
var _a;
let personx = {
    name: "John",
    age: 30,
    startTrial: true,
    trailMethod: () => {
        console.log("Trial method");
    },
};
(_a = personx.trailMethod) === null || _a === void 0 ? void 0 : _a.call(personx); // Using the nullish coalescing operator to check if trailMethod is defined before invoking it.
let personx2 = {
    name: "John",
    age: 30,
    startTrial: true,
    github: "john-doe",
};
console.log(personx2.github);
