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
var PubliqServiceStatisticsItem = /** @class */ (function (_super) {
    __extends(PubliqServiceStatisticsItem, _super);
    function PubliqServiceStatisticsItem(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.peerAddress = data.peer_address === undefined ? data.peerAddress : data.peer_address;
            _this.count = data.count;
        }
        return _this;
    }
    Object.defineProperty(PubliqServiceStatisticsItem, "PropertyMap", {
        get: function () {
            return {
                peerAddress: 'peer_address',
                count: 'count',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqServiceStatisticsItem, "Rtt", {
        get: function () {
            return 26;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqServiceStatisticsItem;
}(BaseModel_1.default));
exports.default = PubliqServiceStatisticsItem;
