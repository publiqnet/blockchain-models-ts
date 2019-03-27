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
var PubliqLoggedTransaction_1 = require("./PubliqLoggedTransaction");
var PubliqLoggedTransactions = /** @class */ (function (_super) {
    __extends(PubliqLoggedTransactions, _super);
    function PubliqLoggedTransactions(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _actions = data.actions.map(function (d) { return new PubliqLoggedTransaction_1.default(d); });
            if (typescript_is_1.is(_actions)) {
                _this.actions = _actions;
            }
            else {
                throw new Error("Type Error: PubliqLoggedTransactions actions is not a Array<PubliqLoggedTransaction>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqLoggedTransactions, "PropertyMap", {
        get: function () {
            return {
                actions: 'actions',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqLoggedTransactions, "Rtt", {
        get: function () {
            return 40;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqLoggedTransactions;
}(BaseModel_1.default));
exports.default = PubliqLoggedTransactions;
