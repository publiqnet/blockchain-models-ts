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
var PubliqAPIBlockHeaderExtended = /** @class */ (function (_super) {
    __extends(PubliqAPIBlockHeaderExtended, _super);
    function PubliqAPIBlockHeaderExtended(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.blockNumber = data.block_number === undefined ? data.blockNumber : data.block_number;
            _this.delta = data.delta;
            _this.cSum = data.c_sum === undefined ? data.cSum : data.c_sum;
            _this.cConst = data.c_const === undefined ? data.cConst : data.c_const;
            _this.prevHash = data.prev_hash === undefined ? data.prevHash : data.prev_hash;
            _this.blockHash = data.block_hash === undefined ? data.blockHash : data.block_hash;
            _this.timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIBlockHeaderExtended, "PropertyMap", {
        get: function () {
            return {
                blockNumber: 'block_number',
                delta: 'delta',
                cSum: 'c_sum',
                cConst: 'c_const',
                prevHash: 'prev_hash',
                blockHash: 'block_hash',
                timeSigned: 'time_signed',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIBlockHeaderExtended, "Rtt", {
        get: function () {
            return 6;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIBlockHeaderExtended;
}(BaseModel_1.default));
exports.default = PubliqAPIBlockHeaderExtended;
