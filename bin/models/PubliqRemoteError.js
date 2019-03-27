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
var PubliqRemoteError = /** @class */ (function (_super) {
    __extends(PubliqRemoteError, _super);
    function PubliqRemoteError(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _message = data.message;
            if (typescript_is_1.is(_message)) {
                _this.message = _message;
            }
            else {
                throw new Error("Type Error: PubliqRemoteError message is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqRemoteError, "PropertyMap", {
        get: function () {
            return {
                message: 'message',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqRemoteError, "Rtt", {
        get: function () {
            return 88;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqRemoteError;
}(BaseModel_1.default));
exports.default = PubliqRemoteError;
