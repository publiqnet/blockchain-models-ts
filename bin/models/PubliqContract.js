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
var PubliqNodeType_1 = require("./PubliqNodeType");
var PubliqContract = /** @class */ (function (_super) {
    __extends(PubliqContract, _super);
    function PubliqContract(data) {
        var _this = _super.call(this) || this;
        _this.owner = data.owner;
        _this.role = PubliqNodeType_1.default.toNumber(data.role);
        return _this;
    }
    Object.defineProperty(PubliqContract, "PropertyMap", {
        get: function () {
            return {
                owner: 'owner',
                role: 'role',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContract, "Rtt", {
        get: function () {
            return 14;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContract;
}(BaseModel_1.default));
exports.default = PubliqContract;
