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
var PubliqAPIKeyPair = /** @class */ (function (_super) {
    __extends(PubliqAPIKeyPair, _super);
    function PubliqAPIKeyPair(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.masterKey = data.master_key === undefined ? data.masterKey : data.master_key;
            _this.index = data.index;
            _this.publicKey = data.public_key === undefined ? data.publicKey : data.public_key;
            _this.privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIKeyPair, "PropertyMap", {
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
    Object.defineProperty(PubliqAPIKeyPair, "Rtt", {
        get: function () {
            return 60;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIKeyPair;
}(BaseModel_1.default));
exports.default = PubliqAPIKeyPair;
