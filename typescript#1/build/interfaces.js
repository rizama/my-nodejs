"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.isGaming = isGaming;
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("On");
    };
    Asus.prototype.off = function () {
        console.log("Off");
    };
    return Asus;
}());
var Msi = /** @class */ (function () {
    function Msi(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Msi.prototype.on = function () {
        console.log("On");
    };
    Msi.prototype.off = function () {
        console.log("Off");
    };
    return Msi;
}());
var asus = new Asus("ROG", true);
console.log(asus.name);
console.log(asus.on());
console.log(asus.off());
