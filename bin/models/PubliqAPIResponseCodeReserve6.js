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
var PubliqAPIResponseCodeReserve6 = /** @class */ (function (_super) {
    __extends(PubliqAPIResponseCodeReserve6, _super);
    function PubliqAPIResponseCodeReserve6(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIResponseCodeReserve6, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIResponseCodeReserve6, "Rtt", {
        get: function () {
            return 101;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIResponseCodeReserve6;
}(BaseModel_1.default));
exports.default = PubliqAPIResponseCodeReserve6;