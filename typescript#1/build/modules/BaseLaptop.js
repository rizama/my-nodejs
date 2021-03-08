"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard_1 = require("./Keyboard");
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, withNumber, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withTouchButton = withTouchButton;
        this.withNumber = withNumber;
    }
    BaseLaptop.prototype.pressA = function () {
        return Keyboard_1.a();
    };
    BaseLaptop.prototype.pressB = function () {
        return Keyboard_1.b();
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
