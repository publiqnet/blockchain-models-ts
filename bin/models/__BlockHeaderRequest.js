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
var __BlockHeaderRequest = /** @class */ (function (_super) {
    __extends(__BlockHeaderRequest, _super);
    function __BlockHeaderRequest(data) {
        var _this = _super.call(this) || this;
        _this.blocksFrom = data.blocks_from;
        _this.blocksTo = data.blocks_to;
        return _this;
    }
    Object.defineProperty(__BlockHeaderRequest, "PropertyMap", {
        get: function () {
            return {
                blocksFrom: 'blocks_from',
                blocksTo: 'blocks_to',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__BlockHeaderRequest, "Rtt", {
        get: function () {
            return 25;
        },
        enumerable: true,
        configurable: true
    });
    return __BlockHeaderRequest;
}(BaseModel_1.default));
exports.default = __BlockHeaderRequest;
