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
var __Shutdown = /** @class */ (function (_super) {
    __extends(__Shutdown, _super);
    function __Shutdown(data) {
        return _super.call(this) || this;
    }
    Object.defineProperty(__Shutdown, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__Shutdown, "Rtt", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    return __Shutdown;
}(BaseModel_1.default));
exports.default = __Shutdown;
