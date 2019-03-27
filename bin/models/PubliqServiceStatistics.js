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
var PubliqServiceStatisticsItem_1 = require("./PubliqServiceStatisticsItem");
var PubliqServiceStatistics = /** @class */ (function (_super) {
    __extends(PubliqServiceStatistics, _super);
    function PubliqServiceStatistics(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _serverAddress = data.server_address === undefined ? data.serverAddress : data.server_address;
            if (typescript_is_1.is(_serverAddress)) {
                _this.serverAddress = _serverAddress;
            }
            else {
                throw new Error("Type Error: PubliqServiceStatistics serverAddress is not a string");
            }
            var _fileUri = data.file_uri === undefined ? data.fileUri : data.file_uri;
            if (typescript_is_1.is(_fileUri)) {
                _this.fileUri = _fileUri;
            }
            else {
                throw new Error("Type Error: PubliqServiceStatistics fileUri is not a string");
            }
            var _statItems = data.stat_items === undefined ? data.statItems.map(function (d) { return new PubliqServiceStatisticsItem_1.default(d); }) : data.stat_items.map(function (d) { return new PubliqServiceStatisticsItem_1.default(d); });
            if (typescript_is_1.is(_statItems)) {
                _this.statItems = _statItems;
            }
            else {
                throw new Error("Type Error: PubliqServiceStatistics statItems is not a Array<PubliqServiceStatisticsItem>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqServiceStatistics, "PropertyMap", {
        get: function () {
            return {
                serverAddress: 'server_address',
                fileUri: 'file_uri',
                statItems: 'stat_items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqServiceStatistics, "Rtt", {
        get: function () {
            return 25;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqServiceStatistics;
}(BaseModel_1.default));
exports.default = PubliqServiceStatistics;
