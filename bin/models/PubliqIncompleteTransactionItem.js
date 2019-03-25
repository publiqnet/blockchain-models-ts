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
var PubliqSignedTransaction_1 = require("./PubliqSignedTransaction");
var PubliqIncompleteTransactionItem = /** @class */ (function (_super) {
    __extends(PubliqIncompleteTransactionItem, _super);
    function PubliqIncompleteTransactionItem(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.signedTransaction = new PubliqSignedTransaction_1.default(data.signed_transaction === undefined ? data.signedTransaction : data.signed_transaction);
        }
        return _this;
    }
    Object.defineProperty(PubliqIncompleteTransactionItem, "PropertyMap", {
        get: function () {
            return {
                signedTransaction: 'signed_transaction',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqIncompleteTransactionItem, "Rtt", {
        get: function () {
            return 53;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqIncompleteTransactionItem;
}(BaseModel_1.default));
exports.default = PubliqIncompleteTransactionItem;
