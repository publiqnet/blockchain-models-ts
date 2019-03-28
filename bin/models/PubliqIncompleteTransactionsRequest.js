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
var PubliqIncompleteTransactionsRequest = /** @class */ (function (_super) {
    __extends(PubliqIncompleteTransactionsRequest, _super);
    function PubliqIncompleteTransactionsRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.address = data.address;
        }
        return _this;
    }
    Object.defineProperty(PubliqIncompleteTransactionsRequest, "PropertyMap", {
        get: function () {
            return {
                address: 'address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqIncompleteTransactionsRequest, "Rtt", {
        get: function () {
            return 51;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqIncompleteTransactionsRequest;
}(BaseModel_1.default));
exports.default = PubliqIncompleteTransactionsRequest;
