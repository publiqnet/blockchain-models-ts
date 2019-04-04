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
var PubliqBlockHeaderExtended_1 = require("./PubliqBlockHeaderExtended");
var PubliqSyncResponse = /** @class */ (function (_super) {
    __extends(PubliqSyncResponse, _super);
    function PubliqSyncResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.ownHeader = new PubliqBlockHeaderExtended_1.default(data.own_header === undefined ? data.ownHeader : data.own_header);
            _this.promisedHeader = new PubliqBlockHeaderExtended_1.default(data.promised_header === undefined ? data.promisedHeader : data.promised_header);
        }
        return _this;
    }
    Object.defineProperty(PubliqSyncResponse, "PropertyMap", {
        get: function () {
            return {
                ownHeader: 'own_header',
                promisedHeader: 'promised_header',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSyncResponse, "Rtt", {
        get: function () {
            return 59;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSyncResponse;
}(BaseModel_1.default));
exports.default = PubliqSyncResponse;
