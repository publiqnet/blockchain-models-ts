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
var PubliqPublicAddressInfo_1 = require("./PubliqPublicAddressInfo");
var PubliqPublicAddressesInfo = /** @class */ (function (_super) {
    __extends(PubliqPublicAddressesInfo, _super);
    function PubliqPublicAddressesInfo(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.addressesInfo = data.addresses_info === undefined ? data.addressesInfo.map(function (d) { return new PubliqPublicAddressInfo_1.default(d); }) : data.addresses_info.map(function (d) { return new PubliqPublicAddressInfo_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqPublicAddressesInfo, "PropertyMap", {
        get: function () {
            return {
                addressesInfo: 'addresses_info',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqPublicAddressesInfo, "Rtt", {
        get: function () {
            return 76;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqPublicAddressesInfo;
}(BaseModel_1.default));
exports.default = PubliqPublicAddressesInfo;
