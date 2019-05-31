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
var PubliqKeyPairRequest = /** @class */ (function (_super) {
    __extends(PubliqKeyPairRequest, _super);
    function PubliqKeyPairRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.masterKey = data.master_key === undefined ? data.masterKey : data.master_key;
            _this.index = data.index;
        }
        return _this;
    }
    Object.defineProperty(PubliqKeyPairRequest, "PropertyMap", {
        get: function () {
            return {
                masterKey: 'master_key',
                index: 'index',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqKeyPairRequest, "Rtt", {
        get: function () {
            return 59;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqKeyPairRequest;
}(BaseModel_1.default));
exports.default = PubliqKeyPairRequest;
