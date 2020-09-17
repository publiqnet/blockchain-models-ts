"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var PubliqContentUnitImpactPerChannel_1 = require("./PubliqContentUnitImpactPerChannel");
var PubliqContentUnitImpactLog = /** @class */ (function (_super) {
    __extends(PubliqContentUnitImpactLog, _super);
    function PubliqContentUnitImpactLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.contentUnitUri = data.content_unit_uri === undefined ? data.contentUnitUri : data.content_unit_uri;
            _this.viewsPerChannel = data.views_per_channel === undefined ? data.viewsPerChannel.map(function (d) { return new PubliqContentUnitImpactPerChannel_1.default(d); }) : data.views_per_channel.map(function (d) { return new PubliqContentUnitImpactPerChannel_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqContentUnitImpactLog, "PropertyMap", {
        get: function () {
            return {
                contentUnitUri: 'content_unit_uri',
                viewsPerChannel: 'views_per_channel',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentUnitImpactLog, "Rtt", {
        get: function () {
            return 81;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentUnitImpactLog;
}(BaseModel_1.default));
exports.default = PubliqContentUnitImpactLog;
