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
var __File = /** @class */ (function (_super) {
    __extends(__File, _super);
    function __File(data) {
        var _this = _super.call(this) || this;
        _this.author = data.author;
        _this.uri = data.uri;
        return _this;
    }
    Object.defineProperty(__File, "PropertyMap", {
        get: function () {
            return {
                author: 'author',
                uri: 'uri',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__File, "Rtt", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    return __File;
}(BaseModel_1.default));
exports.default = __File;
