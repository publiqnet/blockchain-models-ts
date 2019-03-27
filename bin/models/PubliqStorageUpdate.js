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
var PubliqUpdateType_1 = require("./PubliqUpdateType");
var PubliqStorageUpdate = /** @class */ (function (_super) {
    __extends(PubliqStorageUpdate, _super);
    function PubliqStorageUpdate(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _status = PubliqUpdateType_1.default.toNumber(data.status);
            if (typescript_is_1.is(_status)) {
                _this.status = _status;
            }
            else {
                throw new Error("Type Error: PubliqStorageUpdate status is not a number");
            }
            var _uri = data.uri;
            if (typescript_is_1.is(_uri)) {
                _this.uri = _uri;
            }
            else {
                throw new Error("Type Error: PubliqStorageUpdate uri is not a string");
            }
            var _storageAddress = data.storage_address === undefined ? data.storageAddress : data.storage_address;
            if (typescript_is_1.is(_storageAddress)) {
                _this.storageAddress = _storageAddress;
            }
            else {
                throw new Error("Type Error: PubliqStorageUpdate storageAddress is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageUpdate, "PropertyMap", {
        get: function () {
            return {
                status: 'status',
                uri: 'uri',
                storageAddress: 'storage_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageUpdate, "Rtt", {
        get: function () {
            return 24;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageUpdate;
}(BaseModel_1.default));
exports.default = PubliqStorageUpdate;
