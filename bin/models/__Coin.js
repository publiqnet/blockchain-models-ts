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
var __Coin = /** @class */ (function (_super) {
    __extends(__Coin, _super);
    function __Coin(data) {
        var _this = _super.call(this) || this;
        _this.whole = data.whole;
        _this.fraction = data.fraction;
        return _this;
    }
    Object.defineProperty(__Coin, "PropertyMap", {
        get: function () {
            return {
                whole: 'whole',
                fraction: 'fraction',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__Coin, "Rtt", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return __Coin;
}(BaseModel_1.default));
exports.default = __Coin;
