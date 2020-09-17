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
var PubliqAPIEncryptedMessage = /** @class */ (function (_super) {
    __extends(PubliqAPIEncryptedMessage, _super);
    function PubliqAPIEncryptedMessage(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.cipherB64Msg = data.cipher_b64_msg === undefined ? data.cipherB64Msg : data.cipher_b64_msg;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIEncryptedMessage, "PropertyMap", {
        get: function () {
            return {
                cipherB64Msg: 'cipher_b64_msg',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIEncryptedMessage, "Rtt", {
        get: function () {
            return 122;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIEncryptedMessage;
}(BaseModel_1.default));
exports.default = PubliqAPIEncryptedMessage;
