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
var PubliqSyncResponse = /** @class */ (function (_super) {
    __extends(PubliqSyncResponse, _super);
    function PubliqSyncResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.number = data.number;
            _this.cSum = data.c_sum === undefined ? data.cSum : data.c_sum;
            _this.syncInfo = ModelTypes_1.createInstanceFromJson(data.sync_info === undefined ? data.syncInfo : data.sync_info);
        }
        return _this;
    }
    Object.defineProperty(PubliqSyncResponse, "PropertyMap", {
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
    Object.defineProperty(PubliqSyncResponse, "Rtt", {
        get: function () {
            return 33;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSyncResponse;
}(BaseModel_1.default));
exports.default = PubliqSyncResponse;
