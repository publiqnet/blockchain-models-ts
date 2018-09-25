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
var __LoggedTransactionsRequest = /** @class */ (function (_super) {
    __extends(__LoggedTransactionsRequest, _super);
    function __LoggedTransactionsRequest(data) {
        var _this = _super.call(this) || this;
        _this.startIndex = data.start_index;
        return _this;
    }
    Object.defineProperty(__LoggedTransactionsRequest, "PropertyMap", {
        get: function () {
            return {
                startIndex: 'start_index',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__LoggedTransactionsRequest, "Rtt", {
        get: function () {
            return 14;
        },
        enumerable: true,
        configurable: true
    });
    return __LoggedTransactionsRequest;
}(BaseModel_1.default));
exports.default = __LoggedTransactionsRequest;
