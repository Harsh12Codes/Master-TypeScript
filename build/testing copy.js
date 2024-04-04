"use strict";
var seatNo;
(function (seatNo) {
    seatNo[seatNo["SIDE"] = 0] = "SIDE";
    seatNo[seatNo["MIDDLE"] = 1] = "MIDDLE";
    seatNo[seatNo["WINDOW"] = 2] = "WINDOW";
})(seatNo || (seatNo = {}));
let mySeatNo = seatNo.WINDOW;
console.log(mySeatNo); // 2
