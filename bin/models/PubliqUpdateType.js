"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqUpdateType = /** @class */ (function () {
    function PubliqUpdateType() {
    }
    PubliqUpdateType.toString = function (param) {
        switch (param) {
            case 0: return "store";
            case 1: return "remove";
        }
    };
    PubliqUpdateType.toNumber = function (param) {
        switch (param) {
            case "store": return 0;
            case "remove": return 1;
        }
    };
    PubliqUpdateType.store = 0;
    PubliqUpdateType.remove = 1;
    return PubliqUpdateType;
}());
exports.default = PubliqUpdateType;
