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
var PubliqNotEnoughBalance = /** @class */ (function (_super) {
    __extends(PubliqNotEnoughBalance, _super);
    function PubliqNotEnoughBalance(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.balance = new PubliqCoin_1.default(data.balance);
            _this.spending = new PubliqCoin_1.default(data.spending);
        }
        return _this;
    }
    Object.defineProperty(PubliqNotEnoughBalance, "PropertyMap", {
        get: function () {
            return {
                balance: 'balance',
                spending: 'spending',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqNotEnoughBalance, "Rtt", {
        get: function () {
            return 75;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqNotEnoughBalance;
}(BaseModel_1.default));
exports.default = PubliqNotEnoughBalance;
