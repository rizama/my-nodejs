"use strict";
// Tipe data balikan function
function getName() {
    return "Hai Aku Sam";
}
function calculate(params) {
    return params * 2;
}
function print(message) {
    console.log(message);
}
var age = 20;
var Add = function (val1, val2) {
    return val1 + val2;
};
// Default Parameter
var fullname = function (first, last) {
    if (last === void 0) { last = "Pratama"; }
    return first + last;
};
// Optional Parameter
var getUmur = function (first, last) {
    return first + last;
};
