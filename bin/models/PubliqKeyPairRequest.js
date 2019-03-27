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
var PubliqKeyPairRequest = /** @class */ (function (_super) {
    __extends(PubliqKeyPairRequest, _super);
    function PubliqKeyPairRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _masterKey = data.master_key === undefined ? data.masterKey : data.master_key;
            if (typescript_is_1.is(_masterKey)) {
                _this.masterKey = _masterKey;
            }
            else {
                throw new Error("Type Error: PubliqKeyPairRequest masterKey is not a string");
            }
            var _index = data.index;
            if (typescript_is_1.is(_index)) {
                _this.index = _index;
            }
            else {
                throw new Error("Type Error: PubliqKeyPairRequest index is not a number");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqKeyPairRequest, "PropertyMap", {
        get: function () {
            return {
                masterKey: 'master_key',
                index: 'index',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqKeyPairRequest, "Rtt", {
        get: function () {
            return 44;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqKeyPairRequest;
}(BaseModel_1.default));
exports.default = PubliqKeyPairRequest;
