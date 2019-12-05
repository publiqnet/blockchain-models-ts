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
var PubliqStorageFileDelete = /** @class */ (function (_super) {
    __extends(PubliqStorageFileDelete, _super);
    function PubliqStorageFileDelete(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageFileDelete, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFileDelete, "Rtt", {
        get: function () {
            return 108;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFileDelete;
}(BaseModel_1.default));
exports.default = PubliqStorageFileDelete;
