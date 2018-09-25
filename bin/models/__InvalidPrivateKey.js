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
var __InvalidPrivateKey = /** @class */ (function (_super) {
    __extends(__InvalidPrivateKey, _super);
    function __InvalidPrivateKey(data) {
        var _this = _super.call(this) || this;
        _this.privateKey = data.private_key;
        return _this;
    }
    Object.defineProperty(__InvalidPrivateKey, "PropertyMap", {
        get: function () {
            return {
                privateKey: 'private_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__InvalidPrivateKey, "Rtt", {
        get: function () {
            return 31;
        },
        enumerable: true,
        configurable: true
    });
    return __InvalidPrivateKey;
}(BaseModel_1.default));
exports.default = __InvalidPrivateKey;
