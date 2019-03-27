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
var PubliqSignature_1 = require("./PubliqSignature");
var PubliqInvalidSignature = /** @class */ (function (_super) {
    __extends(PubliqInvalidSignature, _super);
    function PubliqInvalidSignature(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _details = new PubliqSignature_1.default(data.details);
            if (typescript_is_1.is(_details)) {
                _this.details = _details;
            }
            else {
                throw new Error("Type Error: PubliqInvalidSignature details is not a PubliqSignature");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqInvalidSignature, "PropertyMap", {
        get: function () {
            return {
                details: 'details',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqInvalidSignature, "Rtt", {
        get: function () {
            return 73;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqInvalidSignature;
}(BaseModel_1.default));
exports.default = PubliqInvalidSignature;
