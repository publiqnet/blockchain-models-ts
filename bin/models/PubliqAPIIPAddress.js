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
var PubliqAPIIPDestination_1 = require("./PubliqAPIIPDestination");
var PubliqAPIIPAddress = /** @class */ (function (_super) {
    __extends(PubliqAPIIPAddress, _super);
    function PubliqAPIIPAddress(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.ipType = data.ip_type === undefined ? data.ipType : data.ip_type;
            _this.local = new PubliqAPIIPDestination_1.default(data.local);
            _this.remote = new PubliqAPIIPDestination_1.default(data.remote);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIIPAddress, "PropertyMap", {
        get: function () {
            return {
                ipType: 'ip_type',
                local: 'local',
                remote: 'remote',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIIPAddress, "Rtt", {
        get: function () {
            return 49;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIIPAddress;
}(BaseModel_1.default));
exports.default = PubliqAPIIPAddress;
