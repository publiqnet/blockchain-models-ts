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
var PubliqSignature = /** @class */ (function (_super) {
    __extends(PubliqSignature, _super);
    function PubliqSignature(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _publicKey = data.public_key === undefined ? data.publicKey : data.public_key;
            if (typescript_is_1.is(_publicKey)) {
                _this.publicKey = _publicKey;
            }
            else {
                throw new Error("Type Error: PubliqSignature publicKey is not a string");
            }
            var _signature = data.signature;
            if (typescript_is_1.is(_signature)) {
                _this.signature = _signature;
            }
            else {
                throw new Error("Type Error: PubliqSignature signature is not a string");
            }
            var _package = ModelTypes_1.createInstanceFromJson(data.package);
            if (typescript_is_1.is(_package)) {
                _this.package = _package;
            }
            else {
                throw new Error("Type Error: PubliqSignature package is not a Object");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqSignature, "PropertyMap", {
        get: function () {
            return {
                publicKey: 'public_key',
                signature: 'signature',
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSignature, "Rtt", {
        get: function () {
            return 47;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSignature;
}(BaseModel_1.default));
exports.default = PubliqSignature;
