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
var __MasterKey = /** @class */ (function (_super) {
    __extends(__MasterKey, _super);
    function __MasterKey(data) {
        var _this = _super.call(this) || this;
        _this.masterKey = data.master_key;
        return _this;
    }
    Object.defineProperty(__MasterKey, "PropertyMap", {
        get: function () {
            return {
                masterKey: 'master_key',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__MasterKey, "Rtt", {
        get: function () {
            return 24;
        },
        enumerable: true,
        configurable: true
    });
    return __MasterKey;
}(BaseModel_1.default));
exports.default = __MasterKey;
