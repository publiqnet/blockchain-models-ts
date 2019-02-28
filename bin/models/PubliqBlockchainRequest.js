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
var PubliqBlockchainRequest = /** @class */ (function (_super) {
    __extends(PubliqBlockchainRequest, _super);
    function PubliqBlockchainRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.blocksFrom = data.blocks_from === undefined ? data.blocksFrom : data.blocks_from;
            _this.blocksTo = data.blocks_to === undefined ? data.blocksTo : data.blocks_to;
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockchainRequest, "PropertyMap", {
        get: function () {
            return {
                blocksFrom: 'blocks_from',
                blocksTo: 'blocks_to',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockchainRequest, "Rtt", {
        get: function () {
            return 36;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockchainRequest;
}(BaseModel_1.default));
exports.default = PubliqBlockchainRequest;
