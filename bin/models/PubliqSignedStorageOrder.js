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
var PubliqStorageOrder_1 = require("./PubliqStorageOrder");
var PubliqAuthority_1 = require("./PubliqAuthority");
var PubliqSignedStorageOrder = /** @class */ (function (_super) {
    __extends(PubliqSignedStorageOrder, _super);
    function PubliqSignedStorageOrder(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.order = new PubliqStorageOrder_1.default(data.order);
            _this.authorization = new PubliqAuthority_1.default(data.authorization);
        }
        return _this;
    }
    Object.defineProperty(PubliqSignedStorageOrder, "PropertyMap", {
        get: function () {
            return {
                order: 'order',
                authorization: 'authorization',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqSignedStorageOrder, "Rtt", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqSignedStorageOrder;
}(BaseModel_1.default));
exports.default = PubliqSignedStorageOrder;
