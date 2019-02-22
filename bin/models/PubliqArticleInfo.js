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
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.authorAddress = data.author_address === undefined ? data.authorAddress : data.author_address;
            _this.channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
        }
        return _this;
    }
    Object.defineProperty(PubliqArticleInfo, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                authorAddress: 'author_address',
                channelAddress: 'channel_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqArticleInfo, "Rtt", {
        get: function () {
            return 17;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqArticleInfo;
}(BaseModel_1.default));
exports.default = PubliqArticleInfo;
