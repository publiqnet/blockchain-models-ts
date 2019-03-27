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
var PubliqLoggedTransactionsRequest = /** @class */ (function (_super) {
    __extends(PubliqLoggedTransactionsRequest, _super);
    function PubliqLoggedTransactionsRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _startIndex = data.start_index === undefined ? data.startIndex : data.start_index;
            if (typescript_is_1.is(_startIndex)) {
                _this.startIndex = _startIndex;
            }
            else {
                throw new Error("Type Error: PubliqLoggedTransactionsRequest startIndex is not a number");
            }
            var _maxCount = data.max_count === undefined ? data.maxCount : data.max_count;
            if (typescript_is_1.is(_maxCount)) {
                _this.maxCount = _maxCount;
            }
            else {
                throw new Error("Type Error: PubliqLoggedTransactionsRequest maxCount is not a number");
            }
        }
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
            return 39;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqLoggedTransactionsRequest;
}(BaseModel_1.default));
exports.default = PubliqLoggedTransactionsRequest;
