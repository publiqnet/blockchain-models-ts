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
var ModelTypes_1 = require("../ModelTypes");
var PubliqAPIDigest = /** @class */ (function (_super) {
    __extends(PubliqAPIDigest, _super);
    function PubliqAPIDigest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.base58Hash = data.base58_hash === undefined ? data.base58Hash : data.base58_hash;
            _this.package = ModelTypes_1.createInstanceFromJson(data.package);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIDigest, "PropertyMap", {
        get: function () {
            return {
                base58Hash: 'base58_hash',
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIDigest, "Rtt", {
        get: function () {
            return 53;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIDigest;
}(BaseModel_1.default));
exports.default = PubliqAPIDigest;
