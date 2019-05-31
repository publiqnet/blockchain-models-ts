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
var PubliqServiceStatisticsFile_1 = require("./PubliqServiceStatisticsFile");
var PubliqServiceStatistics = /** @class */ (function (_super) {
    __extends(PubliqServiceStatistics, _super);
    function PubliqServiceStatistics(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.serverAddress = data.server_address === undefined ? data.serverAddress : data.server_address;
            _this.fileItems = data.file_items === undefined ? data.fileItems.map(function (d) { return new PubliqServiceStatisticsFile_1.default(d); }) : data.file_items.map(function (d) { return new PubliqServiceStatisticsFile_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqServiceStatistics, "PropertyMap", {
        get: function () {
            return {
                serverAddress: 'server_address',
                fileItems: 'file_items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqServiceStatistics, "Rtt", {
        get: function () {
            return 35;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqServiceStatistics;
}(BaseModel_1.default));
exports.default = PubliqServiceStatistics;
