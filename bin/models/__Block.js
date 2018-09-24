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
var __BlockHeader_1 = require("./__BlockHeader");
var __Reward_1 = require("./__Reward");
var __SignedTransaction_1 = require("./__SignedTransaction");
var __Block = /** @class */ (function (_super) {
    __extends(__Block, _super);
    function __Block(data) {
        var _this = _super.call(this) || this;
        _this.header = new __BlockHeader_1.default(data.header);
        _this.rewards = data.rewards.map(function (d) { return new __Reward_1.default(d); });
        _this.signedTransactions = data.signed_transactions.map(function (d) { return new __SignedTransaction_1.default(d); });
        return _this;
    }
    Object.defineProperty(__Block, "PropertyMap", {
        get: function () {
            return {
                header: 'header',
                rewards: 'rewards',
                signedTransactions: 'signed_transactions',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__Block, "Rtt", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    return __Block;
}(BaseModel_1.default));
exports.default = __Block;
