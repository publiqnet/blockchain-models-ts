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
var PubliqStatItem_1 = require("./PubliqStatItem");
var PubliqStatInfo = /** @class */ (function (_super) {
    __extends(PubliqStatInfo, _super);
    function PubliqStatInfo(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.reporterAddress = data.reporter_address === undefined ? data.reporterAddress : data.reporter_address;
            _this.hash = data.hash;
            _this.items = data.items.map(function (d) { return new PubliqStatItem_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqStatInfo, "PropertyMap", {
        get: function () {
            return {
                reporterAddress: 'reporter_address',
                hash: 'hash',
                items: 'items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStatInfo, "Rtt", {
        get: function () {
            return 19;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStatInfo;
}(BaseModel_1.default));
exports.default = PubliqStatInfo;
