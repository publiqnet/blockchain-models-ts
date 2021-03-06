"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqReward = /** @class */ (function (_super) {
    __extends(PubliqReward, _super);
    function PubliqReward(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.to = data.to;
            _this.amount = new PubliqCoin_1.default(data.amount);
            _this.rewardType = data.reward_type === undefined ? data.rewardType : data.reward_type;
        }
        return _this;
    }
    Object.defineProperty(PubliqReward, "PropertyMap", {
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
    Object.defineProperty(PubliqReward, "Rtt", {
        get: function () {
            return 12;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqReward;
}(BaseModel_1.default));
exports.default = PubliqReward;
