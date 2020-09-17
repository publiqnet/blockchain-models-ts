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
var PubliqAPILetter = /** @class */ (function (_super) {
    __extends(PubliqAPILetter, _super);
    function PubliqAPILetter(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.from = data.from;
            _this.to = data.to;
            _this.message = data.message;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPILetter, "PropertyMap", {
        get: function () {
            return {
                from: 'from',
                to: 'to',
                message: 'message',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPILetter, "Rtt", {
        get: function () {
            return 114;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPILetter;
}(BaseModel_1.default));
exports.default = PubliqAPILetter;
