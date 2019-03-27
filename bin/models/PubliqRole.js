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
var PubliqNodeType_1 = require("./PubliqNodeType");
var PubliqRole = /** @class */ (function (_super) {
    __extends(PubliqRole, _super);
    function PubliqRole(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _nodeAddress = data.node_address === undefined ? data.nodeAddress : data.node_address;
            if (typescript_is_1.is(_nodeAddress)) {
                _this.nodeAddress = _nodeAddress;
            }
            else {
                throw new Error("Type Error: PubliqRole nodeAddress is not a string");
            }
            var _nodeType = PubliqNodeType_1.default.toNumber(data.node_type === undefined ? data.nodeType : data.node_type);
            if (typescript_is_1.is(_nodeType)) {
                _this.nodeType = _nodeType;
            }
            else {
                throw new Error("Type Error: PubliqRole nodeType is not a number");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqRole, "PropertyMap", {
        get: function () {
            return {
                nodeAddress: 'node_address',
                nodeType: 'node_type',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqRole, "Rtt", {
        get: function () {
            return 22;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqRole;
}(BaseModel_1.default));
exports.default = PubliqRole;
