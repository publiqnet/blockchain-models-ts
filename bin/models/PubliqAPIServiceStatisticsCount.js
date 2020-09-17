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
var PubliqAPIServiceStatisticsCount = /** @class */ (function (_super) {
    __extends(PubliqAPIServiceStatisticsCount, _super);
    function PubliqAPIServiceStatisticsCount(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.count = data.count;
            _this.peerAddress = data.peer_address === undefined ? data.peerAddress : data.peer_address;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIServiceStatisticsCount, "PropertyMap", {
        get: function () {
            return {
                count: 'count',
                peerAddress: 'peer_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIServiceStatisticsCount, "Rtt", {
        get: function () {
            return 37;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIServiceStatisticsCount;
}(BaseModel_1.default));
exports.default = PubliqAPIServiceStatisticsCount;
