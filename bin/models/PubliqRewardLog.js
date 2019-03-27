"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var typescript_is_1 = require("typescript-is");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqRewardType_1 = require("./PubliqRewardType");
var PubliqRewardLog = /** @class */ (function (_super) {
    __extends(PubliqRewardLog, _super);
    function PubliqRewardLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _to = data.to;
            if (typescript_is_1.is(_to)) {
                _this.to = _to;
            }
            else {
                throw new Error("Type Error: PubliqRewardLog to is not a string");
            }
            var _amount = new PubliqCoin_1.default(data.amount);
            if (typescript_is_1.is(_amount)) {
                _this.amount = _amount;
            }
            else {
                throw new Error("Type Error: PubliqRewardLog amount is not a PubliqCoin");
            }
            var _rewardType = PubliqRewardType_1.default.toNumber(data.reward_type === undefined ? data.rewardType : data.reward_type);
            if (typescript_is_1.is(_rewardType)) {
                _this.rewardType = _rewardType;
            }
            else {
                throw new Error("Type Error: PubliqRewardLog rewardType is not a number");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqRewardLog, "PropertyMap", {
        get: function () {
            return {
                to: 'to',
                amount: 'amount',
                rewardType: 'reward_type',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqRewardLog, "Rtt", {
        get: function () {
            return 9;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqRewardLog;
}(BaseModel_1.default));
exports.default = PubliqRewardLog;
