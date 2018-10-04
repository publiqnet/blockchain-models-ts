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
var PubliqMasterKeyRequest = /** @class */ (function (_super) {
    __extends(PubliqMasterKeyRequest, _super);
    function PubliqMasterKeyRequest(data) {
        return _super.call(this) || this;
    }
    Object.defineProperty(PubliqMasterKeyRequest, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqMasterKeyRequest, "Rtt", {
        get: function () {
            return 19;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqMasterKeyRequest;
}(BaseModel_1.default));
exports.default = PubliqMasterKeyRequest;
