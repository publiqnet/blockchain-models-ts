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
var ModelTypes_1 = require("../ModelTypes");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqTransactionLog = /** @class */ (function (_super) {
    __extends(PubliqTransactionLog, _super);
    function PubliqTransactionLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _fee = new PubliqCoin_1.default(data.fee);
            if (typescript_is_1.is(_fee)) {
                _this.fee = _fee;
            }
            else {
                throw new Error("Type Error: PubliqTransactionLog fee is not a PubliqCoin");
            }
            var _action = ModelTypes_1.createInstanceFromJson(data.action);
            if (typescript_is_1.is(_action)) {
                _this.action = _action;
            }
            else {
                throw new Error("Type Error: PubliqTransactionLog action is not a Object");
            }
            var _transactionHash = data.transaction_hash === undefined ? data.transactionHash : data.transaction_hash;
            if (typescript_is_1.is(_transactionHash)) {
                _this.transactionHash = _transactionHash;
            }
            else {
                throw new Error("Type Error: PubliqTransactionLog transactionHash is not a string");
            }
            var _transactionSize = data.transaction_size === undefined ? data.transactionSize : data.transaction_size;
            if (typescript_is_1.is(_transactionSize)) {
                _this.transactionSize = _transactionSize;
            }
            else {
                throw new Error("Type Error: PubliqTransactionLog transactionSize is not a number");
            }
            var _timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
            if (typescript_is_1.is(_timeSigned)) {
                _this.timeSigned = _timeSigned;
            }
            else {
                throw new Error("Type Error: PubliqTransactionLog timeSigned is not a Date");
            }
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
