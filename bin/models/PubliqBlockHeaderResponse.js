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
var PubliqBlockHeaderResponse = /** @class */ (function (_super) {
    __extends(PubliqBlockHeaderResponse, _super);
    function PubliqBlockHeaderResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(function (d) { return new PubliqBlockHeaderExtended_1.default(d); }) : data.block_headers.map(function (d) { return new PubliqBlockHeaderExtended_1.default(d); });
            if (typescript_is_1.is(_blockHeaders)) {
                _this.blockHeaders = _blockHeaders;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeaderResponse blockHeaders is not a Array<PubliqBlockHeaderExtended>");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockHeaderResponse, "PropertyMap", {
        get: function () {
            return {
                blockHeaders: 'block_headers',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockHeaderResponse, "Rtt", {
        get: function () {
            return 57;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockHeaderResponse;
}(BaseModel_1.default));
exports.default = PubliqBlockHeaderResponse;
