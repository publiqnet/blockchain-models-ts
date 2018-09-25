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
var __BlockHeader_1 = require("./__BlockHeader");
var __BlockHeaderResponse = /** @class */ (function (_super) {
    __extends(__BlockHeaderResponse, _super);
    function __BlockHeaderResponse(data) {
        var _this = _super.call(this) || this;
        _this.blockHeaders = data.block_headers.map(function (d) { return new __BlockHeader_1.default(d); });
        return _this;
    }
    Object.defineProperty(__BlockHeaderResponse, "PropertyMap", {
        get: function () {
            return {
                blockHeaders: 'block_headers',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__BlockHeaderResponse, "Rtt", {
        get: function () {
            return 26;
        },
        enumerable: true,
        configurable: true
    });
    return __BlockHeaderResponse;
}(BaseModel_1.default));
exports.default = __BlockHeaderResponse;
