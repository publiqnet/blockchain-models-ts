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
            case 5: return "sponsoredReturn";
            case 6: return "sponsoredGrant";
        }
    };
    PubliqRewardType.toNumber = function (param) {
        switch (param) {
            case "initial": return 0;
            case "miner": return 1;
            case "author": return 2;
            case "channel": return 3;
            case "storage": return 4;
            case "sponsoredReturn": return 5;
            case "sponsoredGrant": return 6;
        }
    };
    PubliqRewardType.initial = 0;
    PubliqRewardType.miner = 1;
    PubliqRewardType.author = 2;
    PubliqRewardType.channel = 3;
    PubliqRewardType.storage = 4;
    PubliqRewardType.sponsored_return = 5;
    PubliqRewardType.sponsored_grant = 6;
    return PubliqRewardType;
}());
exports.default = PubliqRewardType;
