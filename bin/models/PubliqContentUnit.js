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
var typescript_is_1 = require("typescript-is");
var PubliqContentUnit = /** @class */ (function (_super) {
    __extends(PubliqContentUnit, _super);
    function PubliqContentUnit(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _uri = data.uri;
            if (typescript_is_1.is(_uri)) {
                _this.uri = _uri;
            }
            else {
                throw new Error("Type Error: PubliqContentUnit uri is not a string");
            }
            var _contentId = data.content_id === undefined ? data.contentId : data.content_id;
            if (typescript_is_1.is(_contentId)) {
                _this.contentId = _contentId;
            }
            else {
                throw new Error("Type Error: PubliqContentUnit contentId is not a number");
            }
            var _authorAddresses = data.author_addresses === undefined ? data.authorAddresses : data.author_addresses;
            if (typescript_is_1.is(_authorAddresses)) {
                _this.authorAddresses = _authorAddresses;
            }
            else {
                throw new Error("Type Error: PubliqContentUnit authorAddresses is not a Array<String>");
            }
            var _channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            if (typescript_is_1.is(_channelAddress)) {
                _this.channelAddress = _channelAddress;
            }
            else {
                throw new Error("Type Error: PubliqContentUnit channelAddress is not a string");
            }
            var _fileUris = data.file_uris === undefined ? data.fileUris : data.file_uris;
            if (typescript_is_1.is(_fileUris)) {
                _this.fileUris = _fileUris;
            }
            else {
                throw new Error("Type Error: PubliqContentUnit fileUris is not a Array<String>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqContentUnit, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                contentId: 'content_id',
                authorAddresses: 'author_addresses',
                channelAddress: 'channel_address',
                fileUris: 'file_uris',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentUnit, "Rtt", {
        get: function () {
            return 20;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentUnit;
}(BaseModel_1.default));
exports.default = PubliqContentUnit;
