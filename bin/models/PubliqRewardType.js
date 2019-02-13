"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqRewardType = /** @class */ (function () {
    function PubliqRewardType() {
    }
    PubliqRewardType.toString = function (param) {
        switch (param) {
            case 0: return "initial";
            case 1: return "miner";
            case 2: return "channel";
            case 3: return "storage";
            case 4: return "author";
        }
    };
    PubliqRewardType.toNumber = function (param) {
        switch (param) {
            case "initial": return 0;
            case "miner": return 1;
            case "channel": return 2;
            case "storage": return 3;
            case "author": return 4;
        }
    };
    PubliqRewardType.initial = 0;
    PubliqRewardType.miner = 1;
    PubliqRewardType.channel = 2;
    PubliqRewardType.storage = 3;
    PubliqRewardType.author = 4;
    return PubliqRewardType;
}());
exports.default = PubliqRewardType;
