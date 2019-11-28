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
var PubliqContentUnitImpactPerChannel = /** @class */ (function (_super) {
    __extends(PubliqContentUnitImpactPerChannel, _super);
    function PubliqContentUnitImpactPerChannel(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            _this.viewCount = data.view_count === undefined ? data.viewCount : data.view_count;
        }
        return _this;
    }
    Object.defineProperty(PubliqContentUnitImpactPerChannel, "PropertyMap", {
        get: function () {
            return {
                channelAddress: 'channel_address',
                viewCount: 'view_count',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentUnitImpactPerChannel, "Rtt", {
        get: function () {
            return 82;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentUnitImpactPerChannel;
}(BaseModel_1.default));
exports.default = PubliqContentUnitImpactPerChannel;
