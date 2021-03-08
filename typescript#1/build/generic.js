"use strict";
function getValue(value) {
    return value;
}
console.log(getValue("123").length); // 3
console.log(getValue(123).length); // undefined
function myData(value) {
    return value;
}
console.log(myData("123").length);
console.log(myData(123));
var arrowFunction = function (value) {
    return value;
};
