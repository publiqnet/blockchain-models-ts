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
var ModelTypes_1 = require("../ModelTypes");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqTransaction = /** @class */ (function (_super) {
    __extends(PubliqTransaction, _super);
    function PubliqTransaction(data) {
        var _this = _super.call(this) || this;
        _this.creation = new Date(data.creation);
        _this.expiry = new Date(data.expiry);
        _this.fee = new PubliqCoin_1.default(data.fee);
        _this.action = ModelTypes_1.createInstanceFromJson(data.action);
        return _this;
    }
    Object.defineProperty(PubliqTransaction, "PropertyMap", {
        get: function () {
            return {
                creation: 'creation',
                expiry: 'expiry',
                fee: 'fee',
                action: 'action',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransaction, "Rtt", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransaction;
}(BaseModel_1.default));
exports.default = PubliqTransaction;
