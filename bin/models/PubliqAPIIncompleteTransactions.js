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
var PubliqAPISignedTransaction_1 = require("./PubliqAPISignedTransaction");
var PubliqAPIIncompleteTransactions = /** @class */ (function (_super) {
    __extends(PubliqAPIIncompleteTransactions, _super);
    function PubliqAPIIncompleteTransactions(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.incompleteSignedTransactions = data.incomplete_signed_transactions === undefined ? data.incompleteSignedTransactions.map(function (d) { return new PubliqAPISignedTransaction_1.default(d); }) : data.incomplete_signed_transactions.map(function (d) { return new PubliqAPISignedTransaction_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIIncompleteTransactions, "PropertyMap", {
        get: function () {
            return {
                incompleteSignedTransactions: 'incomplete_signed_transactions',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIIncompleteTransactions, "Rtt", {
        get: function () {
            return 79;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIIncompleteTransactions;
}(BaseModel_1.default));
exports.default = PubliqAPIIncompleteTransactions;
