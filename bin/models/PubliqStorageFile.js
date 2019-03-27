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
var PubliqStorageFile = /** @class */ (function (_super) {
    __extends(PubliqStorageFile, _super);
    function PubliqStorageFile(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _mimeType = data.mime_type === undefined ? data.mimeType : data.mime_type;
            if (typescript_is_1.is(_mimeType)) {
                _this.mimeType = _mimeType;
            }
            else {
                throw new Error("Type Error: PubliqStorageFile mimeType is not a string");
            }
            var _data = data.data;
            if (typescript_is_1.is(_data)) {
                _this.data = _data;
            }
            else {
                throw new Error("Type Error: PubliqStorageFile data is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageFile, "PropertyMap", {
        get: function () {
            return {
                mimeType: 'mime_type',
                data: 'data',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFile, "Rtt", {
        get: function () {
            return 89;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFile;
}(BaseModel_1.default));
exports.default = PubliqStorageFile;
