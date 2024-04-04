"use strict";
var seat;
(function (seat) {
    seat[seat["SIDE"] = 1] = "SIDE";
    seat[seat["MIDDLE"] = 3] = "MIDDLE";
    seat[seat["WINDOW"] = 4] = "WINDOW";
})(seat || (seat = {}));
let mySeat = seat.WINDOW;
