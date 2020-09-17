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
var PubliqAuthority = /** @class */ (function (_super) {
    __extends(PubliqAuthority, _super);
    function PubliqAuthority(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.address = data.address;
            _this.signature = data.signature;
        }
        return _this;
    }
    Object.defineProperty(PubliqAuthority, "PropertyMap", {
        get: function () {
            return {
                address: 'address',
                signature: 'signature',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAuthority, "Rtt", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAuthority;
}(BaseModel_1.default));
exports.default = PubliqAuthority;
