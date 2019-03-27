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
var PubliqIPDestination = /** @class */ (function (_super) {
    __extends(PubliqIPDestination, _super);
    function PubliqIPDestination(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _port = data.port;
            if (typescript_is_1.is(_port)) {
                _this.port = _port;
            }
            else {
                throw new Error("Type Error: PubliqIPDestination port is not a number");
            }
            var _address = data.address;
            if (typescript_is_1.is(_address)) {
                _this.address = _address;
            }
            else {
                throw new Error("Type Error: PubliqIPDestination address is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqIPDestination, "PropertyMap", {
        get: function () {
            return {
                port: 'port',
                address: 'address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqIPDestination, "Rtt", {
        get: function () {
            return 103;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqIPDestination;
}(BaseModel_1.default));
exports.default = PubliqIPDestination;
