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
var PubliqAPIGenericModelReserve3 = /** @class */ (function (_super) {
    __extends(PubliqAPIGenericModelReserve3, _super);
    function PubliqAPIGenericModelReserve3(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIGenericModelReserve3, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIGenericModelReserve3, "Rtt", {
        get: function () {
            return 127;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIGenericModelReserve3;
}(BaseModel_1.default));
exports.default = PubliqAPIGenericModelReserve3;
