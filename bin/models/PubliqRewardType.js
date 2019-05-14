"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqRewardType = /** @class */ (function () {
    function PubliqRewardType() {
    }
    PubliqRewardType.toString = function (param) {
        switch (param) {
            case 0: return "initial";
            case 1: return "miner";
            case 2: return "author";
            case 3: return "channel";
            case 4: return "storage";
        }
    };
    PubliqRewardType.toNumber = function (param) {
        switch (param) {
            case "initial": return 0;
            case "miner": return 1;
            case "author": return 2;
            case "channel": return 3;
            case "storage": return 4;
        }
    };
    PubliqRewardType.initial = 0;
    PubliqRewardType.miner = 1;
    PubliqRewardType.author = 2;
    PubliqRewardType.channel = 3;
    PubliqRewardType.storage = 4;
    return PubliqRewardType;
}());
exports.default = PubliqRewardType;
