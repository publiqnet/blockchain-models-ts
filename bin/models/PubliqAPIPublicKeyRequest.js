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
var PubliqAPIPublicKeyRequest = /** @class */ (function (_super) {
    __extends(PubliqAPIPublicKeyRequest, _super);
    function PubliqAPIPublicKeyRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIPublicKeyRequest, "PropertyMap", {
        get: function () {
            return {
                privateKey: 'private_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIPublicKeyRequest, "Rtt", {
        get: function () {
            return 119;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIPublicKeyRequest;
}(BaseModel_1.default));
exports.default = PubliqAPIPublicKeyRequest;
