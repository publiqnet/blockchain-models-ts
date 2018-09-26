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
var PubliqTransactionInfo = /** @class */ (function (_super) {
    __extends(PubliqTransactionInfo, _super);
    function PubliqTransactionInfo(data) {
        var _this = _super.call(this) || this;
        _this.fee = new PubliqCoin_1.default(data.fee);
        _this.action = ModelTypes_1.createInstanceFromJson(data.action);
        _this.creationTime = new Date(data.creation_time);
        _this.transactionHash = data.transaction_hash;
        return _this;
    }
    Object.defineProperty(PubliqTransactionInfo, "PropertyMap", {
        get: function () {
            return {
                fee: 'fee',
                action: 'action',
                creationTime: 'creation_time',
                transactionHash: 'transaction_hash',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransactionInfo, "Rtt", {
        get: function () {
            return 38;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransactionInfo;
}(BaseModel_1.default));
exports.default = PubliqTransactionInfo;
