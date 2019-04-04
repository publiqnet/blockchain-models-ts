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
var PubliqTransaction_1 = require("./PubliqTransaction");
var PubliqTransactionBroadcastRequest = /** @class */ (function (_super) {
    __extends(PubliqTransactionBroadcastRequest, _super);
    function PubliqTransactionBroadcastRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.transactionDetails = new PubliqTransaction_1.default(data.transaction_details === undefined ? data.transactionDetails : data.transaction_details);
            _this.privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
        }
        return _this;
    }
    Object.defineProperty(PubliqTransactionBroadcastRequest, "PropertyMap", {
        get: function () {
            return {
                transactionDetails: 'transaction_details',
                privateKey: 'private_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransactionBroadcastRequest, "Rtt", {
        get: function () {
            return 52;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransactionBroadcastRequest;
}(BaseModel_1.default));
exports.default = PubliqTransactionBroadcastRequest;
