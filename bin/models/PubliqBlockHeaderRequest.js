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
var PubliqBlockHeaderRequest = /** @class */ (function (_super) {
    __extends(PubliqBlockHeaderRequest, _super);
    function PubliqBlockHeaderRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _blocksFrom = data.blocks_from === undefined ? data.blocksFrom : data.blocks_from;
            if (typescript_is_1.is(_blocksFrom)) {
                _this.blocksFrom = _blocksFrom;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeaderRequest blocksFrom is not a number");
            }
            var _blocksTo = data.blocks_to === undefined ? data.blocksTo : data.blocks_to;
            if (typescript_is_1.is(_blocksTo)) {
                _this.blocksTo = _blocksTo;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeaderRequest blocksTo is not a number");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockHeaderRequest, "PropertyMap", {
        get: function () {
            return {
                blocksFrom: 'blocks_from',
                blocksTo: 'blocks_to',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockHeaderRequest, "Rtt", {
        get: function () {
            return 56;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockHeaderRequest;
}(BaseModel_1.default));
exports.default = PubliqBlockHeaderRequest;
