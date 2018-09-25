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
var __Coin_1 = require("./__Coin");
var __Transfer = /** @class */ (function (_super) {
    __extends(__Transfer, _super);
    function __Transfer(data) {
        var _this = _super.call(this) || this;
        _this.from = data.from;
        _this.to = data.to;
        _this.amount = new __Coin_1.default(data.amount);
        return _this;
    }
    Object.defineProperty(__Transfer, "PropertyMap", {
        get: function () {
            return {
                from: 'from',
                to: 'to',
                amount: 'amount',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__Transfer, "Rtt", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    return __Transfer;
}(BaseModel_1.default));
exports.default = __Transfer;
