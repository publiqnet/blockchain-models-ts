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
var __KeyPair = /** @class */ (function (_super) {
    __extends(__KeyPair, _super);
    function __KeyPair(data) {
        var _this = _super.call(this) || this;
        _this.masterKey = data.master_key;
        _this.index = data.index;
        _this.publicKey = data.public_key;
        _this.privateKey = data.private_key;
        return _this;
    }
    Object.defineProperty(__KeyPair, "PropertyMap", {
        get: function () {
            return {
                masterKey: 'master_key',
                index: 'index',
                publicKey: 'public_key',
                privateKey: 'private_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__KeyPair, "Rtt", {
        get: function () {
            return 18;
        },
        enumerable: true,
        configurable: true
    });
    return __KeyPair;
}(BaseModel_1.default));
exports.default = __KeyPair;
