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
var PubliqLogTransaction = /** @class */ (function (_super) {
    __extends(PubliqLogTransaction, _super);
    function PubliqLogTransaction(data) {
        var _this = _super.call(this) || this;
        _this.action = ModelTypes_1.createInstanceFromJson(data.action);
        return _this;
    }
    Object.defineProperty(PubliqLogTransaction, "PropertyMap", {
        get: function () {
            return {
                action: 'action',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqLogTransaction, "Rtt", {
        get: function () {
            return 36;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqLogTransaction;
}(BaseModel_1.default));
exports.default = PubliqLogTransaction;
