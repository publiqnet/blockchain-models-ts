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
var PubliqServiceStatisticsItem = /** @class */ (function (_super) {
    __extends(PubliqServiceStatisticsItem, _super);
    function PubliqServiceStatisticsItem(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _peerAddress = data.peer_address === undefined ? data.peerAddress : data.peer_address;
            if (typescript_is_1.is(_peerAddress)) {
                _this.peerAddress = _peerAddress;
            }
            else {
                throw new Error("Type Error: PubliqServiceStatisticsItem peerAddress is not a string");
            }
            var _count = data.count;
            if (typescript_is_1.is(_count)) {
                _this.count = _count;
            }
            else {
                throw new Error("Type Error: PubliqServiceStatisticsItem count is not a number");
            }
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
