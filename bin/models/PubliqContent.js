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
var PubliqContent = /** @class */ (function (_super) {
    __extends(PubliqContent, _super);
    function PubliqContent(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _contentId = data.content_id === undefined ? data.contentId : data.content_id;
            if (typescript_is_1.is(_contentId)) {
                _this.contentId = _contentId;
            }
            else {
                throw new Error("Type Error: PubliqContent contentId is not a number");
            }
            var _channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            if (typescript_is_1.is(_channelAddress)) {
                _this.channelAddress = _channelAddress;
            }
            else {
                throw new Error("Type Error: PubliqContent channelAddress is not a string");
            }
            var _contentUnitUris = data.content_unit_uris === undefined ? data.contentUnitUris : data.content_unit_uris;
            if (typescript_is_1.is(_contentUnitUris)) {
                _this.contentUnitUris = _contentUnitUris;
            }
            else {
                throw new Error("Type Error: PubliqContent contentUnitUris is not a Array<String>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqContent, "PropertyMap", {
        get: function () {
            return {
                contentId: 'content_id',
                channelAddress: 'channel_address',
                contentUnitUris: 'content_unit_uris',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContent, "Rtt", {
        get: function () {
            return 21;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContent;
}(BaseModel_1.default));
exports.default = PubliqContent;
