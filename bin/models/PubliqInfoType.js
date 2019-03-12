"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqInfoType = /** @class */ (function () {
    function PubliqInfoType() {
    }
    PubliqInfoType.toString = function (param) {
        switch (param) {
            case 0: return "store";
            case 1: return "reject";
        }
    };
    PubliqInfoType.toNumber = function (param) {
        switch (param) {
            case "store": return 0;
            case "reject": return 1;
        }
    };
    PubliqInfoType.store = 0;
    PubliqInfoType.reject = 1;
    return PubliqInfoType;
}());
exports.default = PubliqInfoType;
