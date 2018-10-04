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
var PubliqRewardInfo_1 = require("./PubliqRewardInfo");
var PubliqTransactionInfo_1 = require("./PubliqTransactionInfo");
var PubliqBlockInfo = /** @class */ (function (_super) {
    __extends(PubliqBlockInfo, _super);
    function PubliqBlockInfo(data) {
        var _this = _super.call(this) || this;
        _this.authority = data.authority;
        _this.blockHash = data.block_hash;
        _this.signTime = new Date(data.sign_time);
        _this.rewards = data.rewards.map(function (d) { return new PubliqRewardInfo_1.default(d); });
        _this.transactions = data.transactions.map(function (d) { return new PubliqTransactionInfo_1.default(d); });
        return _this;
    }
    Object.defineProperty(PubliqBlockInfo, "PropertyMap", {
        get: function () {
            return {
                authority: 'authority',
                blockHash: 'block_hash',
                signTime: 'sign_time',
                rewards: 'rewards',
                transactions: 'transactions',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockInfo, "Rtt", {
        get: function () {
            return 13;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockInfo;
}(BaseModel_1.default));
exports.default = PubliqBlockInfo;
