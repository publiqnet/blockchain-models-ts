"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var PubliqStorageFileDetailsResponse = /** @class */ (function (_super) {
    __extends(PubliqStorageFileDetailsResponse, _super);
    function PubliqStorageFileDetailsResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.mimeType = data.mime_type === undefined ? data.mimeType : data.mime_type;
            _this.size = data.size;
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageFileDetailsResponse, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                mimeType: 'mime_type',
                size: 'size',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFileDetailsResponse, "Rtt", {
        get: function () {
            return 112;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFileDetailsResponse;
}(BaseModel_1.default));
exports.default = PubliqStorageFileDetailsResponse;
