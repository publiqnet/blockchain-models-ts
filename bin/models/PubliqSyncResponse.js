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
var PubliqBlockHeaderExtended_1 = require("./PubliqBlockHeaderExtended");
var PubliqSyncResponse = /** @class */ (function (_super) {
    __extends(PubliqSyncResponse, _super);
    function PubliqSyncResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _ownHeader = new PubliqBlockHeaderExtended_1.default(data.own_header === undefined ? data.ownHeader : data.own_header);
            if (typescript_is_1.is(_ownHeader)) {
                _this.ownHeader = _ownHeader;
            }
            else {
                throw new Error("Type Error: PubliqSyncResponse ownHeader is not a PubliqBlockHeaderExtended");
            }
            var _promisedHeader = new PubliqBlockHeaderExtended_1.default(data.promised_header === undefined ? data.promisedHeader : data.promised_header);
            if (typescript_is_1.is(_promisedHeader)) {
                _this.promisedHeader = _promisedHeader;
            }
            else {
                throw new Error("Type Error: PubliqSyncResponse promisedHeader is not a PubliqBlockHeaderExtended");
            }
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
            return 55;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSyncResponse;
}(BaseModel_1.default));
exports.default = PubliqSyncResponse;
