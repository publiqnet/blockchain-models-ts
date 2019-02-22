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
var ModelTypes_1 = require("../ModelTypes");
var PubliqLoggingType_1 = require("./PubliqLoggingType");
var PubliqLoggedTransaction = /** @class */ (function (_super) {
    __extends(PubliqLoggedTransaction, _super);
    function PubliqLoggedTransaction(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.loggingType = PubliqLoggingType_1.default.toNumber(data.logging_type === undefined ? data.loggingType : data.logging_type);
            _this.index = data.index;
            _this.action = ModelTypes_1.createInstanceFromJson(data.action);
        }
        return _this;
    }
    Object.defineProperty(PubliqLoggedTransaction, "PropertyMap", {
        get: function () {
            return {
                loggingType: 'logging_type',
                index: 'index',
                action: 'action',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqLoggedTransaction, "Rtt", {
        get: function () {
            return 25;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqLoggedTransaction;
}(BaseModel_1.default));
exports.default = PubliqLoggedTransaction;
