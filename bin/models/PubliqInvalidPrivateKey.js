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
var PubliqInvalidPrivateKey = /** @class */ (function (_super) {
    __extends(PubliqInvalidPrivateKey, _super);
    function PubliqInvalidPrivateKey(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
            if (typescript_is_1.is(_privateKey)) {
                _this.privateKey = _privateKey;
            }
            else {
                throw new Error("Type Error: PubliqInvalidPrivateKey privateKey is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqInvalidPrivateKey, "PropertyMap", {
        get: function () {
            return {
                privateKey: 'private_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqInvalidPrivateKey, "Rtt", {
        get: function () {
            return 72;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqInvalidPrivateKey;
}(BaseModel_1.default));
exports.default = PubliqInvalidPrivateKey;
