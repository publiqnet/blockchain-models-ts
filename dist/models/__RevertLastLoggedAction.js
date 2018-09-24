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
var __RevertLastLoggedAction = /** @class */ (function (_super) {
    __extends(__RevertLastLoggedAction, _super);
    function __RevertLastLoggedAction(data) {
        return _super.call(this) || this;
    }
    Object.defineProperty(__RevertLastLoggedAction, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__RevertLastLoggedAction, "Rtt", {
        get: function () {
            return 28;
        },
        enumerable: true,
        configurable: true
    });
    return __RevertLastLoggedAction;
}(BaseModel_1.default));
exports.default = __RevertLastLoggedAction;
