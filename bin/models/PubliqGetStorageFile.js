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
var PubliqGetStorageFile = /** @class */ (function (_super) {
    __extends(PubliqGetStorageFile, _super);
    function PubliqGetStorageFile(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.nodeAddress = data.node_address === undefined ? data.nodeAddress : data.node_address;
        }
        return _this;
    }
    Object.defineProperty(PubliqGetStorageFile, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                nodeAddress: 'node_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqGetStorageFile, "Rtt", {
        get: function () {
            return 50;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqGetStorageFile;
}(BaseModel_1.default));
exports.default = PubliqGetStorageFile;
