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
var PubliqKeyPair = /** @class */ (function (_super) {
    __extends(PubliqKeyPair, _super);
    function PubliqKeyPair(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _masterKey = data.master_key === undefined ? data.masterKey : data.master_key;
            if (typescript_is_1.is(_masterKey)) {
                _this.masterKey = _masterKey;
            }
            else {
                throw new Error("Type Error: PubliqKeyPair masterKey is not a string");
            }
            var _index = data.index;
            if (typescript_is_1.is(_index)) {
                _this.index = _index;
            }
            else {
                throw new Error("Type Error: PubliqKeyPair index is not a number");
            }
            var _publicKey = data.public_key === undefined ? data.publicKey : data.public_key;
            if (typescript_is_1.is(_publicKey)) {
                _this.publicKey = _publicKey;
            }
            else {
                throw new Error("Type Error: PubliqKeyPair publicKey is not a string");
            }
            var _privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
            if (typescript_is_1.is(_privateKey)) {
                _this.privateKey = _privateKey;
            }
            else {
                throw new Error("Type Error: PubliqKeyPair privateKey is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqKeyPair, "PropertyMap", {
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
    Object.defineProperty(PubliqKeyPair, "Rtt", {
        get: function () {
            return 45;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqKeyPair;
}(BaseModel_1.default));
exports.default = PubliqKeyPair;
