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
var PubliqStorageFileSizeResponse = /** @class */ (function (_super) {
    __extends(PubliqStorageFileSizeResponse, _super);
    function PubliqStorageFileSizeResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.size = data.size;
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageFileSizeResponse, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                size: 'size',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFileSizeResponse, "Rtt", {
        get: function () {
            return 112;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFileSizeResponse;
}(BaseModel_1.default));
exports.default = PubliqStorageFileSizeResponse;
