"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqLoggingType = /** @class */ (function () {
    function PubliqLoggingType() {
    }
    PubliqLoggingType.toString = function (param) {
        switch (param) {
            case 0: return "apply";
            case 1: return "revert";
        }
    };
    PubliqLoggingType.toNumber = function (param) {
        switch (param) {
            case "apply": return 0;
            case "revert": return 1;
        }
    };
    PubliqLoggingType.apply = 0;
    PubliqLoggingType.revert = 1;
    return PubliqLoggingType;
}());
exports.default = PubliqLoggingType;
