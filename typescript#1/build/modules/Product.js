"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = __importDefault(require("./Asus"));
var Msi_1 = __importDefault(require("./Msi"));
var asus = new Asus_1.default("Swift 3", false, true);
console.log(asus);
console.log(asus.pressA());
var modern = new Msi_1.default("Prestige", true, true);
console.log(modern);
console.log(modern.pressB());
