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
var PubliqBoostInfo = /** @class */ (function (_super) {
    __extends(PubliqBoostInfo, _super);
    function PubliqBoostInfo(data) {
        var _this = _super.call(this) || this;
        _this.author = data.author;
        _this.channel = data.channel;
        _this.contentHash = data.content_hash;
        return _this;
    }
    Object.defineProperty(PubliqBoostInfo, "PropertyMap", {
        get: function () {
            return {
                author: 'author',
                channel: 'channel',
                contentHash: 'content_hash',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBoostInfo, "Rtt", {
        get: function () {
            return 16;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBoostInfo;
}(BaseModel_1.default));
exports.default = PubliqBoostInfo;
