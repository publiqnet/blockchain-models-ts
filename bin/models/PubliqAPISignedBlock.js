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
var PubliqAPIBlock_1 = require("./PubliqAPIBlock");
var PubliqAPIAuthority_1 = require("./PubliqAPIAuthority");
var PubliqAPISignedBlock = /** @class */ (function (_super) {
    __extends(PubliqAPISignedBlock, _super);
    function PubliqAPISignedBlock(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.blockDetails = new PubliqAPIBlock_1.default(data.block_details === undefined ? data.blockDetails : data.block_details);
            _this.authorization = new PubliqAPIAuthority_1.default(data.authorization);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPISignedBlock, "PropertyMap", {
        get: function () {
            return {
                blockDetails: 'block_details',
                authorization: 'authorization',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPISignedBlock, "Rtt", {
        get: function () {
            return 8;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPISignedBlock;
}(BaseModel_1.default));
exports.default = PubliqAPISignedBlock;
