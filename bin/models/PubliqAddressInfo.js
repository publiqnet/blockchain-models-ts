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
var PubliqIPAddress_1 = require("./PubliqIPAddress");
var PubliqAddressInfo = /** @class */ (function (_super) {
    __extends(PubliqAddressInfo, _super);
    function PubliqAddressInfo(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.nodeAddress = data.node_address === undefined ? data.nodeAddress : data.node_address;
            _this.ipAddress = new PubliqIPAddress_1.default(data.ip_address === undefined ? data.ipAddress : data.ip_address);
            _this.sslIpAddress = new PubliqIPAddress_1.default(data.ssl_ip_address === undefined ? data.sslIpAddress : data.ssl_ip_address);
        }
        return _this;
    }
    Object.defineProperty(PubliqAddressInfo, "PropertyMap", {
        get: function () {
            return {
                nodeAddress: 'node_address',
                ipAddress: 'ip_address',
                sslIpAddress: 'ssl_ip_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAddressInfo, "Rtt", {
        get: function () {
            return 33;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAddressInfo;
}(BaseModel_1.default));
exports.default = PubliqAddressInfo;
