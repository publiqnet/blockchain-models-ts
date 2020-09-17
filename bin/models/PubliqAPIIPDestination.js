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
var PubliqAPIIPDestination = /** @class */ (function (_super) {
    __extends(PubliqAPIIPDestination, _super);
    function PubliqAPIIPDestination(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.port = data.port;
            _this.address = data.address;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIIPDestination, "PropertyMap", {
        get: function () {
            return {
                port: 'port',
                address: 'address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIIPDestination, "Rtt", {
        get: function () {
            return 48;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIIPDestination;
}(BaseModel_1.default));
exports.default = PubliqAPIIPDestination;
