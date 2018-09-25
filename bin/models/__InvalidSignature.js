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
var __Signature_1 = require("./__Signature");
var __InvalidSignature = /** @class */ (function (_super) {
    __extends(__InvalidSignature, _super);
    function __InvalidSignature(data) {
        var _this = _super.call(this) || this;
        _this.details = new __Signature_1.default(data.details);
        return _this;
    }
    Object.defineProperty(__InvalidSignature, "PropertyMap", {
        get: function () {
            return {
                details: 'details',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__InvalidSignature, "Rtt", {
        get: function () {
            return 32;
        },
        enumerable: true,
        configurable: true
    });
    return __InvalidSignature;
}(BaseModel_1.default));
exports.default = __InvalidSignature;
