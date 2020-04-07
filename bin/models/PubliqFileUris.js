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
var PubliqFileUris = /** @class */ (function (_super) {
    __extends(PubliqFileUris, _super);
    function PubliqFileUris(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.fileUris = data.file_uris === undefined ? data.fileUris : data.file_uris;
        }
        return _this;
    }
    Object.defineProperty(PubliqFileUris, "PropertyMap", {
        get: function () {
            return {
                fileUris: 'file_uris',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqFileUris, "Rtt", {
        get: function () {
            return 85;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqFileUris;
}(BaseModel_1.default));
exports.default = PubliqFileUris;
