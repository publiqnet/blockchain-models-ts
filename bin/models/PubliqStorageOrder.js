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
var PubliqStorageOrder = /** @class */ (function (_super) {
    __extends(PubliqStorageOrder, _super);
    function PubliqStorageOrder(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.storageAddress = data.storage_address === undefined ? data.storageAddress : data.storage_address;
            _this.fileUri = data.file_uri === undefined ? data.fileUri : data.file_uri;
            _this.contentUnitUri = data.content_unit_uri === undefined ? data.contentUnitUri : data.content_unit_uri;
            _this.sessionId = data.session_id === undefined ? data.sessionId : data.session_id;
            _this.seconds = data.seconds;
            _this.timePoint = new Date(data.time_point === undefined ? data.timePoint : data.time_point);
        }
        return _this;
    }
    Object.defineProperty(PubliqStorageOrder, "PropertyMap", {
        get: function () {
            return {
                storageAddress: 'storage_address',
                fileUri: 'file_uri',
                contentUnitUri: 'content_unit_uri',
                sessionId: 'session_id',
                seconds: 'seconds',
                timePoint: 'time_point',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageOrder, "Rtt", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageOrder;
}(BaseModel_1.default));
exports.default = PubliqStorageOrder;
