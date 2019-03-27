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
var PubliqInvalidAuthority = /** @class */ (function (_super) {
    __extends(PubliqInvalidAuthority, _super);
    function PubliqInvalidAuthority(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _authorityProvided = data.authority_provided === undefined ? data.authorityProvided : data.authority_provided;
            if (typescript_is_1.is(_authorityProvided)) {
                _this.authorityProvided = _authorityProvided;
            }
            else {
                throw new Error("Type Error: PubliqInvalidAuthority authorityProvided is not a string");
            }
            var _authorityRequired = data.authority_required === undefined ? data.authorityRequired : data.authority_required;
            if (typescript_is_1.is(_authorityRequired)) {
                _this.authorityRequired = _authorityRequired;
            }
            else {
                throw new Error("Type Error: PubliqInvalidAuthority authorityRequired is not a string");
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqInvalidAuthority, "PropertyMap", {
        get: function () {
            return {
                authorityProvided: 'authority_provided',
                authorityRequired: 'authority_required',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqInvalidAuthority, "Rtt", {
        get: function () {
            return 74;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqInvalidAuthority;
}(BaseModel_1.default));
exports.default = PubliqInvalidAuthority;
