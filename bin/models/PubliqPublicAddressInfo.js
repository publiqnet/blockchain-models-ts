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
var PubliqIPAddress_1 = require("./PubliqIPAddress");
var PubliqPublicAddressInfo = /** @class */ (function (_super) {
    __extends(PubliqPublicAddressInfo, _super);
    function PubliqPublicAddressInfo(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.ipAddress = new PubliqIPAddress_1.default(data.ip_address === undefined ? data.ipAddress : data.ip_address);
            _this.nodeAddress = data.node_address === undefined ? data.nodeAddress : data.node_address;
            _this.secondsSinceChecked = data.seconds_since_checked === undefined ? data.secondsSinceChecked : data.seconds_since_checked;
        }
        return _this;
    }
    Object.defineProperty(PubliqPublicAddressInfo, "PropertyMap", {
        get: function () {
            return {
                ipAddress: 'ip_address',
                nodeAddress: 'node_address',
                secondsSinceChecked: 'seconds_since_checked',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqPublicAddressInfo, "Rtt", {
        get: function () {
            return 66;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqPublicAddressInfo;
}(BaseModel_1.default));
exports.default = PubliqPublicAddressInfo;
