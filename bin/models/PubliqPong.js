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
var PubliqPong = /** @class */ (function (_super) {
    __extends(PubliqPong, _super);
    function PubliqPong(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.nodeAddress = data.node_address === undefined ? data.nodeAddress : data.node_address;
            _this.stamp = new Date(data.stamp);
            _this.signature = data.signature;
        }
        return _this;
    }
    Object.defineProperty(PubliqPong, "PropertyMap", {
        get: function () {
            return {
                nodeAddress: 'node_address',
                stamp: 'stamp',
                signature: 'signature',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqPong, "Rtt", {
        get: function () {
            return 51;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqPong;
}(BaseModel_1.default));
exports.default = PubliqPong;
