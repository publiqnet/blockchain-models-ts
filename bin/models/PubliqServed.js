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
var PubliqServed = /** @class */ (function (_super) {
    __extends(PubliqServed, _super);
    function PubliqServed(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.storageOrderToken = data.storage_order_token === undefined ? data.storageOrderToken : data.storage_order_token;
        }
        return _this;
    }
    Object.defineProperty(PubliqServed, "PropertyMap", {
        get: function () {
            return {
                storageOrderToken: 'storage_order_token',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqServed, "Rtt", {
        get: function () {
            return 80;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqServed;
}(BaseModel_1.default));
exports.default = PubliqServed;
