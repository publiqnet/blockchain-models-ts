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
var PubliqRewardLog_1 = require("./PubliqRewardLog");
var PubliqTransactionLog_1 = require("./PubliqTransactionLog");
var PubliqBlockLog = /** @class */ (function (_super) {
    __extends(PubliqBlockLog, _super);
    function PubliqBlockLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _authority = data.authority;
            if (typescript_is_1.is(_authority)) {
                _this.authority = _authority;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog authority is not a string");
            }
            var _blockHash = data.block_hash === undefined ? data.blockHash : data.block_hash;
            if (typescript_is_1.is(_blockHash)) {
                _this.blockHash = _blockHash;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog blockHash is not a string");
            }
            var _blockNumber = data.block_number === undefined ? data.blockNumber : data.block_number;
            if (typescript_is_1.is(_blockNumber)) {
                _this.blockNumber = _blockNumber;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog blockNumber is not a number");
            }
            var _blockSize = data.block_size === undefined ? data.blockSize : data.block_size;
            if (typescript_is_1.is(_blockSize)) {
                _this.blockSize = _blockSize;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog blockSize is not a number");
            }
            var _timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
            if (typescript_is_1.is(_timeSigned)) {
                _this.timeSigned = _timeSigned;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog timeSigned is not a Date");
            }
            var _rewards = data.rewards.map(function (d) { return new PubliqRewardLog_1.default(d); });
            if (typescript_is_1.is(_rewards)) {
                _this.rewards = _rewards;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog rewards is not a Array<PubliqRewardLog>");
            }
            var _transactions = data.transactions.map(function (d) { return new PubliqTransactionLog_1.default(d); });
            if (typescript_is_1.is(_transactions)) {
                _this.transactions = _transactions;
            }
            else {
                throw new Error("Type Error: PubliqBlockLog transactions is not a Array<PubliqTransactionLog>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockLog, "PropertyMap", {
        get: function () {
            return {
                authority: 'authority',
                blockHash: 'block_hash',
                blockNumber: 'block_number',
                blockSize: 'block_size',
                timeSigned: 'time_signed',
                rewards: 'rewards',
                transactions: 'transactions',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockLog, "Rtt", {
        get: function () {
            return 11;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockLog;
}(BaseModel_1.default));
exports.default = PubliqBlockLog;
