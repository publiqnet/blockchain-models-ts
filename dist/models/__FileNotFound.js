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
var __FileNotFound = /** @class */ (function (_super) {
    __extends(__FileNotFound, _super);
    function __FileNotFound(data) {
        var _this = _super.call(this) || this;
        _this.uri = data.uri;
        return _this;
    }
    Object.defineProperty(__FileNotFound, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__FileNotFound, "Rtt", {
        get: function () {
            return 13;
        },
        enumerable: true,
        configurable: true
    });
    return __FileNotFound;
}(BaseModel_1.default));
exports.default = __FileNotFound;
