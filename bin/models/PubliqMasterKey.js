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
var PubliqMasterKey = /** @class */ (function (_super) {
    __extends(PubliqMasterKey, _super);
    function PubliqMasterKey(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.masterKey = data.master_key === undefined ? data.masterKey : data.master_key;
        }
        return _this;
    }
    Object.defineProperty(PubliqMasterKey, "PropertyMap", {
        get: function () {
            return {
                masterKey: 'master_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqMasterKey, "Rtt", {
        get: function () {
            return 43;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqMasterKey;
}(BaseModel_1.default));
exports.default = PubliqMasterKey;
