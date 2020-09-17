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
var PubliqAPISignedBlock_1 = require("./PubliqAPISignedBlock");
var PubliqAPIBlockchainResponse = /** @class */ (function (_super) {
    __extends(PubliqAPIBlockchainResponse, _super);
    function PubliqAPIBlockchainResponse(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.signedBlocks = data.signed_blocks === undefined ? data.signedBlocks.map(function (d) { return new PubliqAPISignedBlock_1.default(d); }) : data.signed_blocks.map(function (d) { return new PubliqAPISignedBlock_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIBlockchainResponse, "PropertyMap", {
        get: function () {
            return {
                signedBlocks: 'signed_blocks',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIBlockchainResponse, "Rtt", {
        get: function () {
            return 74;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIBlockchainResponse;
}(BaseModel_1.default));
exports.default = PubliqAPIBlockchainResponse;
