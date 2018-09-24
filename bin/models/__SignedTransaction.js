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
var __Transaction_1 = require("./__Transaction");
var __SignedTransaction = /** @class */ (function (_super) {
    __extends(__SignedTransaction, _super);
    function __SignedTransaction(data) {
        var _this = _super.call(this) || this;
        _this.transactionDetails = new __Transaction_1.default(data.transaction_details);
        _this.authority = data.authority;
        _this.signature = data.signature;
        return _this;
    }
    Object.defineProperty(__SignedTransaction, "PropertyMap", {
        get: function () {
            return {
                transactionDetails: 'transaction_details',
                authority: 'authority',
                signature: 'signature',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__SignedTransaction, "Rtt", {
        get: function () {
            return 33;
        },
        enumerable: true,
        configurable: true
    });
    return __SignedTransaction;
}(BaseModel_1.default));
exports.default = __SignedTransaction;
