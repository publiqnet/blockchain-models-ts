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
var PubliqAPICancelSponsorContentUnit = /** @class */ (function (_super) {
    __extends(PubliqAPICancelSponsorContentUnit, _super);
    function PubliqAPICancelSponsorContentUnit(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.sponsorAddress = data.sponsor_address === undefined ? data.sponsorAddress : data.sponsor_address;
            _this.uri = data.uri;
            _this.transactionHash = data.transaction_hash === undefined ? data.transactionHash : data.transaction_hash;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPICancelSponsorContentUnit, "PropertyMap", {
        get: function () {
            return {
                sponsorAddress: 'sponsor_address',
                uri: 'uri',
                transactionHash: 'transaction_hash',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPICancelSponsorContentUnit, "Rtt", {
        get: function () {
            return 39;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPICancelSponsorContentUnit;
}(BaseModel_1.default));
exports.default = PubliqAPICancelSponsorContentUnit;
