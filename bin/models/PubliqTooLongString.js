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
var PubliqTooLongString = /** @class */ (function (_super) {
    __extends(PubliqTooLongString, _super);
    function PubliqTooLongString(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _usedString = data.used_string === undefined ? data.usedString : data.used_string;
            if (typescript_is_1.is(_usedString)) {
                _this.usedString = _usedString;
            }
            else {
                throw new Error("Type Error: PubliqTooLongString usedString is not a string");
            }
            var _maxLength = data.max_length === undefined ? data.maxLength : data.max_length;
            if (typescript_is_1.is(_maxLength)) {
                _this.maxLength = _maxLength;
            }
            else {
                throw new Error("Type Error: PubliqTooLongString maxLength is not a number");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqTooLongString, "PropertyMap", {
        get: function () {
            return {
                usedString: 'used_string',
                maxLength: 'max_length',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTooLongString, "Rtt", {
        get: function () {
            return 76;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTooLongString;
}(BaseModel_1.default));
exports.default = PubliqTooLongString;
