"use strict";
//
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
// console.log(Month);
// string enums
var Month2;
(function (Month2) {
    Month2["JAN"] = "Januari";
    Month2["FEB"] = "Februari";
    Month2["MAR"] = "Maret";
    Month2["APR"] = "April";
    Month2["MAY"] = "Mei";
})(Month2 || (Month2 = {}));
console.log(Month2);
