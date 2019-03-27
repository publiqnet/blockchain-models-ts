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
var ModelTypes_1 = require("../ModelTypes");
var PubliqDigest = /** @class */ (function (_super) {
    __extends(PubliqDigest, _super);
    function PubliqDigest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _base58Hash = data.base58_hash === undefined ? data.base58Hash : data.base58_hash;
            if (typescript_is_1.is(_base58Hash)) {
                _this.base58Hash = _base58Hash;
            }
            else {
                throw new Error("Type Error: PubliqDigest base58Hash is not a string");
            }
            var _package = ModelTypes_1.createInstanceFromJson(data.package);
            if (typescript_is_1.is(_package)) {
                _this.package = _package;
            }
            else {
                throw new Error("Type Error: PubliqDigest package is not a Object");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqDigest, "PropertyMap", {
        get: function () {
            return {
                base58Hash: 'base58_hash',
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqDigest, "Rtt", {
        get: function () {
            return 38;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqDigest;
}(BaseModel_1.default));
exports.default = PubliqDigest;
