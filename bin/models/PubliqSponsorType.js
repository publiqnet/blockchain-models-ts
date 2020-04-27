"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqSponsorType = /** @class */ (function () {
    function PubliqSponsorType() {
    }
    PubliqSponsorType.toString = function (param) {
        switch (param) {
            case 0: return "global";
            case 1: return "article";
        }
    };
    PubliqSponsorType.toNumber = function (param) {
        switch (param) {
            case "global": return 0;
            case "article": return 1;
        }
    };
    PubliqSponsorType.global = 0;
    PubliqSponsorType.article = 1;
    return PubliqSponsorType;
}());
exports.default = PubliqSponsorType;
