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
var PubliqTransaction_1 = require("./PubliqTransaction");
var PubliqAuthority_1 = require("./PubliqAuthority");
var PubliqSignedTransaction = /** @class */ (function (_super) {
    __extends(PubliqSignedTransaction, _super);
    function PubliqSignedTransaction(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _transactionDetails = new PubliqTransaction_1.default(data.transaction_details === undefined ? data.transactionDetails : data.transaction_details);
            if (typescript_is_1.is(_transactionDetails)) {
                _this.transactionDetails = _transactionDetails;
            }
            else {
                throw new Error("Type Error: PubliqSignedTransaction transactionDetails is not a PubliqTransaction");
            }
            var _authorizations = data.authorizations.map(function (d) { return new PubliqAuthority_1.default(d); });
            if (typescript_is_1.is(_authorizations)) {
                _this.authorizations = _authorizations;
            }
            else {
                throw new Error("Type Error: PubliqSignedTransaction authorizations is not a Array<PubliqAuthority>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqSignedTransaction, "PropertyMap", {
        get: function () {
            return {
                transactionDetails: 'transaction_details',
                authorizations: 'authorizations',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSignedTransaction, "Rtt", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSignedTransaction;
}(BaseModel_1.default));
exports.default = PubliqSignedTransaction;
