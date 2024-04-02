"use strict";
var classes;
(function (classes) {
    classes[classes["a"] = 1] = "a";
    classes[classes["b"] = 2] = "b";
    classes[classes["c"] = 3] = "c";
})(classes || (classes = {}));
let classA = classes.a;
console.log(classA);
