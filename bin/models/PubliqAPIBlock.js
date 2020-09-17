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
var PubliqAPIBlockHeader_1 = require("./PubliqAPIBlockHeader");
var PubliqAPIReward_1 = require("./PubliqAPIReward");
var PubliqAPISignedTransaction_1 = require("./PubliqAPISignedTransaction");
var PubliqAPIBlock = /** @class */ (function (_super) {
    __extends(PubliqAPIBlock, _super);
    function PubliqAPIBlock(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.header = new PubliqAPIBlockHeader_1.default(data.header);
            _this.rewards = data.rewards.map(function (d) { return new PubliqAPIReward_1.default(d); });
            _this.signedTransactions = data.signed_transactions === undefined ? data.signedTransactions.map(function (d) { return new PubliqAPISignedTransaction_1.default(d); }) : data.signed_transactions.map(function (d) { return new PubliqAPISignedTransaction_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIBlock, "PropertyMap", {
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
    Object.defineProperty(PubliqAPIBlock, "Rtt", {
        get: function () {
            return 7;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIBlock;
}(BaseModel_1.default));
exports.default = PubliqAPIBlock;
