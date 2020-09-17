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
var PubliqAPIPublicAddressesRequest = /** @class */ (function (_super) {
    __extends(PubliqAPIPublicAddressesRequest, _super);
    function PubliqAPIPublicAddressesRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.addressType = data.address_type === undefined ? data.addressType : data.address_type;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIPublicAddressesRequest, "PropertyMap", {
        get: function () {
            return {
                addressType: 'address_type',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIPublicAddressesRequest, "Rtt", {
        get: function () {
            return 75;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIPublicAddressesRequest;
}(BaseModel_1.default));
exports.default = PubliqAPIPublicAddressesRequest;