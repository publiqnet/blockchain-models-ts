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
var PubliqTransfer = /** @class */ (function (_super) {
    __extends(PubliqTransfer, _super);
    function PubliqTransfer(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _from = data.from;
            if (typescript_is_1.is(_from)) {
                _this.from = _from;
            }
            else {
                throw new Error("Type Error: PubliqTransfer from is not a string");
            }
            var _to = data.to;
            if (typescript_is_1.is(_to)) {
                _this.to = _to;
            }
            else {
                throw new Error("Type Error: PubliqTransfer to is not a string");
            }
            var _amount = new PubliqCoin_1.default(data.amount);
            if (typescript_is_1.is(_amount)) {
                _this.amount = _amount;
            }
            else {
                throw new Error("Type Error: PubliqTransfer amount is not a PubliqCoin");
            }
            var _message = data.message;
            if (typescript_is_1.is(_message)) {
                _this.message = _message;
            }
            else {
                throw new Error("Type Error: PubliqTransfer message is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqTransfer, "PropertyMap", {
        get: function () {
            return {
                from: 'from',
                to: 'to',
                amount: 'amount',
                message: 'message',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransfer, "Rtt", {
        get: function () {
            return 13;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransfer;
}(BaseModel_1.default));
exports.default = PubliqTransfer;
