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
var PubliqAPIEncrypt = /** @class */ (function (_super) {
    __extends(PubliqAPIEncrypt, _super);
    function PubliqAPIEncrypt(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.plainB64Msg = data.plain_b64_msg === undefined ? data.plainB64Msg : data.plain_b64_msg;
            _this.publicKey = data.public_key === undefined ? data.publicKey : data.public_key;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIEncrypt, "PropertyMap", {
        get: function () {
            return {
                plainB64Msg: 'plain_b64_msg',
                publicKey: 'public_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIEncrypt, "Rtt", {
        get: function () {
            return 121;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIEncrypt;
}(BaseModel_1.default));
exports.default = PubliqAPIEncrypt;
