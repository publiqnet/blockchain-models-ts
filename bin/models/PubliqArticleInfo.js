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
var PubliqArticleInfo = /** @class */ (function (_super) {
    __extends(PubliqArticleInfo, _super);
    function PubliqArticleInfo(data) {
        var _this = _super.call(this) || this;
        _this.uri = data.uri;
        _this.author = data.author;
        _this.channel = data.channel;
        return _this;
    }
    Object.defineProperty(PubliqArticleInfo, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                author: 'author',
                channel: 'channel',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqArticleInfo, "Rtt", {
        get: function () {
            return 16;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqArticleInfo;
}(BaseModel_1.default));
exports.default = PubliqArticleInfo;
