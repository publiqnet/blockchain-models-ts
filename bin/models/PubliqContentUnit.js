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
var PubliqContentUnit = /** @class */ (function (_super) {
    __extends(PubliqContentUnit, _super);
    function PubliqContentUnit(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.authorAddress = data.author_address === undefined ? data.authorAddress : data.author_address;
            _this.channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            _this.contentId = data.content_id === undefined ? data.contentId : data.content_id;
            _this.uri = data.uri;
            _this.fileUris = data.file_uris === undefined ? data.fileUris : data.file_uris;
        }
        return _this;
    }
    Object.defineProperty(PubliqContentUnit, "PropertyMap", {
        get: function () {
            return {
                authorAddress: 'author_address',
                channelAddress: 'channel_address',
                contentId: 'content_id',
                uri: 'uri',
                fileUris: 'file_uris',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentUnit, "Rtt", {
        get: function () {
            return 13;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentUnit;
}(BaseModel_1.default));
exports.default = PubliqContentUnit;
