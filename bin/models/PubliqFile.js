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
var PubliqFile = /** @class */ (function (_super) {
    __extends(PubliqFile, _super);
    function PubliqFile(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.authorAddresses = data.author_addresses === undefined ? data.authorAddresses : data.author_addresses;
        }
        return _this;
    }
    Object.defineProperty(PubliqFile, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                authorAddresses: 'author_addresses',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqFile, "Rtt", {
        get: function () {
            return 29;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqFile;
}(BaseModel_1.default));
exports.default = PubliqFile;
