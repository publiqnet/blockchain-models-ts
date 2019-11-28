"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqIPType = /** @class */ (function () {
    function PubliqIPType() {
    }
    PubliqIPType.toString = function (param) {
        switch (param) {
            case 0: return "any";
            case 1: return "ipv4";
            case 2: return "ipv6";
        }
    };
    PubliqIPType.toNumber = function (param) {
        switch (param) {
            case "any": return 0;
            case "ipv4": return 1;
            case "ipv6": return 2;
        }
    };
    PubliqIPType.any = 0;
    PubliqIPType.ipv4 = 1;
    PubliqIPType.ipv6 = 2;
    return PubliqIPType;
}());
exports.default = PubliqIPType;
