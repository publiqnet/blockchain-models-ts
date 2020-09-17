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
var ModelTypes_1 = require("../ModelTypes");
var PubliqAPIDigestRequest = /** @class */ (function (_super) {
    __extends(PubliqAPIDigestRequest, _super);
    function PubliqAPIDigestRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.package = ModelTypes_1.createInstanceFromJson(data.package);
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIDigestRequest, "PropertyMap", {
        get: function () {
            return {
                package: 'package',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIDigestRequest, "Rtt", {
        get: function () {
            return 52;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIDigestRequest;
}(BaseModel_1.default));
exports.default = PubliqAPIDigestRequest;
