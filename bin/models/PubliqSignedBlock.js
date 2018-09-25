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
var ModelTypes_1 = require("../ModelTypes");
var PubliqSignedBlock = /** @class */ (function (_super) {
    __extends(PubliqSignedBlock, _super);
    function PubliqSignedBlock(data) {
        var _this = _super.call(this) || this;
        _this.blockDetails = ModelTypes_1.createInstanceFromJson(data.block_details);
        _this.authority = data.authority;
        _this.signature = data.signature;
        return _this;
    }
    Object.defineProperty(PubliqSignedBlock, "PropertyMap", {
        get: function () {
            return {
                blockDetails: 'block_details',
                authority: 'authority',
                signature: 'signature',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSignedBlock, "Rtt", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSignedBlock;
}(BaseModel_1.default));
exports.default = PubliqSignedBlock;
