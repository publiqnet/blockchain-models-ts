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
var __InvalidPublicKey = /** @class */ (function (_super) {
    __extends(__InvalidPublicKey, _super);
    function __InvalidPublicKey(data) {
        var _this = _super.call(this) || this;
        _this.publicKey = data.public_key;
        return _this;
    }
    Object.defineProperty(__InvalidPublicKey, "PropertyMap", {
        get: function () {
            return {
                publicKey: 'public_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__InvalidPublicKey, "Rtt", {
        get: function () {
            return 16;
        },
        enumerable: true,
        configurable: true
    });
    return __InvalidPublicKey;
}(BaseModel_1.default));
exports.default = __InvalidPublicKey;
