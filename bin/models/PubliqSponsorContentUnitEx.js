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
var PubliqSponsorType_1 = require("./PubliqSponsorType");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqSponsorContentUnitEx = /** @class */ (function (_super) {
    __extends(PubliqSponsorContentUnitEx, _super);
    function PubliqSponsorContentUnitEx(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.type = PubliqSponsorType_1.default.toNumber(data.type);
            _this.sponsorAddress = data.sponsor_address === undefined ? data.sponsorAddress : data.sponsor_address;
            _this.uri = data.uri;
            _this.startTimePoint = new Date(data.start_time_point === undefined ? data.startTimePoint : data.start_time_point);
            _this.hours = data.hours;
            _this.amount = new PubliqCoin_1.default(data.amount);
        }
        return _this;
    }
    Object.defineProperty(PubliqSponsorContentUnitEx, "PropertyMap", {
        get: function () {
            return {
                type: 'type',
                sponsorAddress: 'sponsor_address',
                uri: 'uri',
                startTimePoint: 'start_time_point',
                hours: 'hours',
                amount: 'amount',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSponsorContentUnitEx, "Rtt", {
        get: function () {
            return 40;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSponsorContentUnitEx;
}(BaseModel_1.default));
exports.default = PubliqSponsorContentUnitEx;
