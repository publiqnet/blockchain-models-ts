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
var __RemoteError = /** @class */ (function (_super) {
    __extends(__RemoteError, _super);
    function __RemoteError(data) {
        var _this = _super.call(this) || this;
        _this.message = data.message;
        return _this;
    }
    Object.defineProperty(__RemoteError, "PropertyMap", {
        get: function () {
            return {
                message: 'message',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__RemoteError, "Rtt", {
        get: function () {
            return 35;
        },
        enumerable: true,
        configurable: true
    });
    return __RemoteError;
}(BaseModel_1.default));
exports.default = __RemoteError;
