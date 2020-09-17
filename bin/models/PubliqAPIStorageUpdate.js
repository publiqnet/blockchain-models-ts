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
var PubliqAPIStorageUpdate = /** @class */ (function (_super) {
    __extends(PubliqAPIStorageUpdate, _super);
    function PubliqAPIStorageUpdate(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.status = data.status;
            _this.fileUri = data.file_uri === undefined ? data.fileUri : data.file_uri;
            _this.storageAddress = data.storage_address === undefined ? data.storageAddress : data.storage_address;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIStorageUpdate, "PropertyMap", {
        get: function () {
            return {
                status: 'status',
                fileUri: 'file_uri',
                storageAddress: 'storage_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIStorageUpdate, "Rtt", {
        get: function () {
            return 34;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIStorageUpdate;
}(BaseModel_1.default));
exports.default = PubliqAPIStorageUpdate;
