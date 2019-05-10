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
var PubliqServiceStatistics_1 = require("./PubliqServiceStatistics");
var PubliqStatistics_del = /** @class */ (function (_super) {
    __extends(PubliqStatistics_del, _super);
    function PubliqStatistics_del(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.data = new PubliqServiceStatistics_1.default(data.data);
        }
        return _this;
    }
    Object.defineProperty(PubliqStatistics_del, "PropertyMap", {
        get: function () {
            return {
                data: 'data',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStatistics_del, "Rtt", {
        get: function () {
            return 25;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStatistics_del;
}(BaseModel_1.default));
exports.default = PubliqStatistics_del;
