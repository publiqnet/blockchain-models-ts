"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqUriProblemType = /** @class */ (function () {
    function PubliqUriProblemType() {
    }
    PubliqUriProblemType.toString = function (param) {
        switch (param) {
            case 0: return "missing";
            case 1: return "duplicate";
            case 2: return "invalid";
        }
    };
    PubliqUriProblemType.toNumber = function (param) {
        switch (param) {
            case "missing": return 0;
            case "duplicate": return 1;
            case "invalid": return 2;
        }
    };
    PubliqUriProblemType.missing = 0;
    PubliqUriProblemType.duplicate = 1;
    PubliqUriProblemType.invalid = 2;
    return PubliqUriProblemType;
}());
exports.default = PubliqUriProblemType;
