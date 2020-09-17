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
var PubliqAPICoin_1 = require("./PubliqAPICoin");
var PubliqAPINotEnoughBalance = /** @class */ (function (_super) {
    __extends(PubliqAPINotEnoughBalance, _super);
    function PubliqAPINotEnoughBalance(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.balance = new PubliqAPICoin_1.default(data.balance);
            _this.spending = new PubliqAPICoin_1.default(data.spending);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPINotEnoughBalance, "PropertyMap", {
        get: function () {
            return {
                balance: 'balance',
                spending: 'spending',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPINotEnoughBalance, "Rtt", {
        get: function () {
            return 93;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPINotEnoughBalance;
}(BaseModel_1.default));
exports.default = PubliqAPINotEnoughBalance;
