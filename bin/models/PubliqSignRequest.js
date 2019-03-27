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
var PubliqSignRequest = /** @class */ (function (_super) {
    __extends(PubliqSignRequest, _super);
    function PubliqSignRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
            if (typescript_is_1.is(_privateKey)) {
                _this.privateKey = _privateKey;
            }
            else {
                throw new Error("Type Error: PubliqSignRequest privateKey is not a string");
            }
            var _package = ModelTypes_1.createInstanceFromJson(data.package);
            if (typescript_is_1.is(_package)) {
                _this.package = _package;
            }
            else {
                throw new Error("Type Error: PubliqSignRequest package is not a Object");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqSignRequest, "PropertyMap", {
        get: function () {
            return {
                privateKey: 'private_key',
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSignRequest, "Rtt", {
        get: function () {
            return 46;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSignRequest;
}(BaseModel_1.default));
exports.default = PubliqSignRequest;
