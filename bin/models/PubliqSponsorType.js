"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqSponsorType = /** @class */ (function () {
    function PubliqSponsorType() {
    }
    PubliqSponsorType.toString = function (param) {
        switch (param) {
            case 0: return "all";
            case 1: return "global";
            case 2: return "article";
        }
    };
    PubliqSponsorType.toNumber = function (param) {
        switch (param) {
            case "all": return 0;
            case "global": return 1;
            case "article": return 2;
        }
    };
    PubliqSponsorType.all = 0;
    PubliqSponsorType.global = 1;
    PubliqSponsorType.article = 2;
    return PubliqSponsorType;
}());
exports.default = PubliqSponsorType;
