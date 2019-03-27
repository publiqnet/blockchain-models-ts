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
var PubliqInvalidPublicKey = /** @class */ (function (_super) {
    __extends(PubliqInvalidPublicKey, _super);
    function PubliqInvalidPublicKey(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _publicKey = data.public_key === undefined ? data.publicKey : data.public_key;
            if (typescript_is_1.is(_publicKey)) {
                _this.publicKey = _publicKey;
            }
            else {
                throw new Error("Type Error: PubliqInvalidPublicKey publicKey is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqInvalidPublicKey, "PropertyMap", {
        get: function () {
            return {
                publicKey: 'public_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqInvalidPublicKey, "Rtt", {
        get: function () {
            return 71;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqInvalidPublicKey;
}(BaseModel_1.default));
exports.default = PubliqInvalidPublicKey;
