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
var PubliqTooLongString = /** @class */ (function (_super) {
    __extends(PubliqTooLongString, _super);
    function PubliqTooLongString(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.usedString = data.used_string === undefined ? data.usedString : data.used_string;
            _this.maxLength = data.max_length === undefined ? data.maxLength : data.max_length;
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
            return 94;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTooLongString;
}(BaseModel_1.default));
exports.default = PubliqTooLongString;
