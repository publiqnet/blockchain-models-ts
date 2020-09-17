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
var PubliqAPIBlockHeaderExtended_1 = require("./PubliqAPIBlockHeaderExtended");
var PubliqAPIBlockHeaderResponse = /** @class */ (function (_super) {
    __extends(PubliqAPIBlockHeaderResponse, _super);
    function PubliqAPIBlockHeaderResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(function (d) { return new PubliqAPIBlockHeaderExtended_1.default(d); }) : data.block_headers.map(function (d) { return new PubliqAPIBlockHeaderExtended_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIBlockHeaderResponse, "PropertyMap", {
        get: function () {
            return {
                blockHeaders: 'block_headers',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIBlockHeaderResponse, "Rtt", {
        get: function () {
            return 72;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIBlockHeaderResponse;
}(BaseModel_1.default));
exports.default = PubliqAPIBlockHeaderResponse;
