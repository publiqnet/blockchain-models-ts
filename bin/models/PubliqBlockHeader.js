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
var PubliqBlockHeader = /** @class */ (function (_super) {
    __extends(PubliqBlockHeader, _super);
    function PubliqBlockHeader(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _blockNumber = data.block_number === undefined ? data.blockNumber : data.block_number;
            if (typescript_is_1.is(_blockNumber)) {
                _this.blockNumber = _blockNumber;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader blockNumber is not a number");
            }
            var _delta = data.delta;
            if (typescript_is_1.is(_delta)) {
                _this.delta = _delta;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader delta is not a number");
            }
            var _cSum = data.c_sum === undefined ? data.cSum : data.c_sum;
            if (typescript_is_1.is(_cSum)) {
                _this.cSum = _cSum;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader cSum is not a number");
            }
            var _cConst = data.c_const === undefined ? data.cConst : data.c_const;
            if (typescript_is_1.is(_cConst)) {
                _this.cConst = _cConst;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader cConst is not a number");
            }
            var _prevHash = data.prev_hash === undefined ? data.prevHash : data.prev_hash;
            if (typescript_is_1.is(_prevHash)) {
                _this.prevHash = _prevHash;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader prevHash is not a string");
            }
            var _timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
            if (typescript_is_1.is(_timeSigned)) {
                _this.timeSigned = _timeSigned;
            }
            else {
                throw new Error("Type Error: PubliqBlockHeader timeSigned is not a Date");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockHeader, "PropertyMap", {
        get: function () {
            return {
                blockNumber: 'block_number',
                delta: 'delta',
                cSum: 'c_sum',
                cConst: 'c_const',
                prevHash: 'prev_hash',
                timeSigned: 'time_signed',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockHeader, "Rtt", {
        get: function () {
            return 5;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockHeader;
}(BaseModel_1.default));
exports.default = PubliqBlockHeader;
