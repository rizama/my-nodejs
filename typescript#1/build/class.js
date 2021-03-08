"use strict";
// class User {
// 	public name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }
// OR
// class User {
// 	constructor(public name: string) {
// 		this.name = name;
// 	}
// }
// let user = new User("Sam");
// console.log(user);
// Inheritance
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
// public 		= bisa di akses disemua class / dari luar class
// protected	= hanya bisa di akses dari class tersebut dan class turunannya
// private		= hanya bisa di akses dari class itu sendiri
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "rizkysam@gmail.com";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email;
        },
        enumerable: false,
        configurable: true
    });
    Admin.getNameDummy = function () {
        return "lorem";
    };
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
var admin = new Admin("098888888", "sam", 25);
admin.getName();
admin.getRole();
admin.setName("samsudin");
// constructor
admin.phone;
// Setter Getter
admin.email = "ahaha@gmail.com";
admin.email;
// Property and Method
var roleName = Admin.getRoleName;
var dummy = Admin.getNameDummy();
