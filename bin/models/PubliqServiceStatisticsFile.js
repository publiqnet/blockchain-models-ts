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
var PubliqServiceStatisticsCount_1 = require("./PubliqServiceStatisticsCount");
var PubliqServiceStatisticsFile = /** @class */ (function (_super) {
    __extends(PubliqServiceStatisticsFile, _super);
    function PubliqServiceStatisticsFile(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.fileUri = data.file_uri === undefined ? data.fileUri : data.file_uri;
            _this.unitUri = data.unit_uri === undefined ? data.unitUri : data.unit_uri;
            _this.countItems = data.count_items === undefined ? data.countItems.map(function (d) { return new PubliqServiceStatisticsCount_1.default(d); }) : data.count_items.map(function (d) { return new PubliqServiceStatisticsCount_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqServiceStatisticsFile, "PropertyMap", {
        get: function () {
            return {
                fileUri: 'file_uri',
                unitUri: 'unit_uri',
                countItems: 'count_items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqServiceStatisticsFile, "Rtt", {
        get: function () {
            return 26;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqServiceStatisticsFile;
}(BaseModel_1.default));
exports.default = PubliqServiceStatisticsFile;
