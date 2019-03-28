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
var PubliqTransactionLog = /** @class */ (function (_super) {
    __extends(PubliqTransactionLog, _super);
    function PubliqTransactionLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.fee = new PubliqCoin_1.default(data.fee);
            _this.action = ModelTypes_1.createInstanceFromJson(data.action);
            _this.transactionHash = data.transaction_hash === undefined ? data.transactionHash : data.transaction_hash;
            _this.transactionSize = data.transaction_size === undefined ? data.transactionSize : data.transaction_size;
            _this.timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
        }
        return _this;
    }
    Object.defineProperty(PubliqTransactionLog, "PropertyMap", {
        get: function () {
            return {
                fee: 'fee',
                action: 'action',
                transactionHash: 'transaction_hash',
                transactionSize: 'transaction_size',
                timeSigned: 'time_signed',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransactionLog, "Rtt", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransactionLog;
}(BaseModel_1.default));
exports.default = PubliqTransactionLog;
