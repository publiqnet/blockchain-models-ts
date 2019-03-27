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
var PubliqStorageFileRequest = /** @class */ (function (_super) {
    __extends(PubliqStorageFileRequest, _super);
    function PubliqStorageFileRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _uri = data.uri;
            if (typescript_is_1.is(_uri)) {
                _this.uri = _uri;
            }
            else {
                throw new Error("Type Error: PubliqStorageFileRequest uri is not a string");
            }
            var _channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            if (typescript_is_1.is(_channelAddress)) {
                _this.channelAddress = _channelAddress;
            }
            else {
                throw new Error("Type Error: PubliqStorageFileRequest channelAddress is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageFileRequest, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                channelAddress: 'channel_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFileRequest, "Rtt", {
        get: function () {
            return 92;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFileRequest;
}(BaseModel_1.default));
exports.default = PubliqStorageFileRequest;
