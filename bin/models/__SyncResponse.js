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
var ModelTypes_1 = require("../ModelTypes");
var __SyncResponse = /** @class */ (function (_super) {
    __extends(__SyncResponse, _super);
    function __SyncResponse(data) {
        var _this = _super.call(this) || this;
        _this.number = data.number;
        _this.cSum = data.c_sum;
        _this.syncInfo = ModelTypes_1.createInstanceFromJson(data.sync_info);
        return _this;
    }
    Object.defineProperty(__SyncResponse, "PropertyMap", {
        get: function () {
            return {
                number: 'number',
                cSum: 'c_sum',
                syncInfo: 'sync_info',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__SyncResponse, "Rtt", {
        get: function () {
            return 24;
        },
        enumerable: true,
        configurable: true
    });
    return __SyncResponse;
}(BaseModel_1.default));
exports.default = __SyncResponse;
