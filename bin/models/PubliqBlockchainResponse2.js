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
var PubliqSignedBlock_1 = require("./PubliqSignedBlock");
var PubliqBlockchainResponse2 = /** @class */ (function (_super) {
    __extends(PubliqBlockchainResponse2, _super);
    function PubliqBlockchainResponse2(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.signedBlocks = data.signed_blocks === undefined ? data.signedBlocks.map(function (d) { return new PubliqSignedBlock_1.default(d); }) : data.signed_blocks.map(function (d) { return new PubliqSignedBlock_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockchainResponse2, "PropertyMap", {
        get: function () {
            return {
                signedBlocks: 'signed_blocks',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockchainResponse2, "Rtt", {
        get: function () {
            return 43;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockchainResponse2;
}(BaseModel_1.default));
exports.default = PubliqBlockchainResponse2;
