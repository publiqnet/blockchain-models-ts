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
var PubliqStorageFile = /** @class */ (function (_super) {
    __extends(PubliqStorageFile, _super);
    function PubliqStorageFile(data) {
        var _this = _super.call(this) || this;
        _this.mimeType = data.mime_type;
        _this.data = data.data;
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
            return 48;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFile;
}(BaseModel_1.default));
exports.default = PubliqStorageFile;
