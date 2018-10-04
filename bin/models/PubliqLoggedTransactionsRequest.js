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
var PubliqLoggedTransactionsRequest = /** @class */ (function (_super) {
    __extends(PubliqLoggedTransactionsRequest, _super);
    function PubliqLoggedTransactionsRequest(data) {
        var _this = _super.call(this) || this;
        _this.startIndex = data.start_index;
        _this.maxCount = data.max_count;
        return _this;
    }
    Object.defineProperty(PubliqLoggedTransactionsRequest, "PropertyMap", {
        get: function () {
            return {
                startIndex: 'start_index',
                maxCount: 'max_count',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqLoggedTransactionsRequest, "Rtt", {
        get: function () {
            return 17;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqLoggedTransactionsRequest;
}(BaseModel_1.default));
exports.default = PubliqLoggedTransactionsRequest;
