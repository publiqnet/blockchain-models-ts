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
var __BlockHeader = /** @class */ (function (_super) {
    __extends(__BlockHeader, _super);
    function __BlockHeader(data) {
        var _this = _super.call(this) || this;
        _this.blockNumber = data.block_number;
        _this.delta = data.delta;
        _this.cSum = data.c_sum;
        _this.cConst = data.c_const;
        _this.prevHash = data.prev_hash;
        _this.signTime = new Date(data.sign_time);
        return _this;
    }
    Object.defineProperty(__BlockHeader, "PropertyMap", {
        get: function () {
            return {
                blockNumber: 'block_number',
                delta: 'delta',
                cSum: 'c_sum',
                cConst: 'c_const',
                prevHash: 'prev_hash',
                signTime: 'sign_time',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__BlockHeader, "Rtt", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    return __BlockHeader;
}(BaseModel_1.default));
exports.default = __BlockHeader;
