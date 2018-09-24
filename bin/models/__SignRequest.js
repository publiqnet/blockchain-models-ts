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
var ModelTypes_1 = require("../ModelTypes");
var __SignRequest = /** @class */ (function (_super) {
    __extends(__SignRequest, _super);
    function __SignRequest(data) {
        var _this = _super.call(this) || this;
        _this.privateKey = data.private_key;
        _this.package = ModelTypes_1.createInstanceFromJson(data.package);
        return _this;
    }
    Object.defineProperty(__SignRequest, "PropertyMap", {
        get: function () {
            return {
                privateKey: 'private_key',
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__SignRequest, "Rtt", {
        get: function () {
            return 34;
        },
        enumerable: true,
        configurable: true
    });
    return __SignRequest;
}(BaseModel_1.default));
exports.default = __SignRequest;
