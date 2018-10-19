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
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqRewardInfo = /** @class */ (function (_super) {
    __extends(PubliqRewardInfo, _super);
    function PubliqRewardInfo(data) {
        var _this = _super.call(this) || this;
        _this.to = data.to;
        _this.amount = new PubliqCoin_1.default(data.amount);
        return _this;
    }
    Object.defineProperty(PubliqRewardInfo, "PropertyMap", {
        get: function () {
            return {
                to: 'to',
                amount: 'amount',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqRewardInfo, "Rtt", {
        get: function () {
            return 7;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqRewardInfo;
}(BaseModel_1.default));
exports.default = PubliqRewardInfo;
