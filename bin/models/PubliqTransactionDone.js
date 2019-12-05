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
var PubliqTransactionDone = /** @class */ (function (_super) {
    __extends(PubliqTransactionDone, _super);
    function PubliqTransactionDone(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.transactionHash = data.transaction_hash === undefined ? data.transactionHash : data.transaction_hash;
        }
        return _this;
    }
    Object.defineProperty(PubliqTransactionDone, "PropertyMap", {
        get: function () {
            return {
                transactionHash: 'transaction_hash',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTransactionDone, "Rtt", {
        get: function () {
            return 64;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTransactionDone;
}(BaseModel_1.default));
exports.default = PubliqTransactionDone;
