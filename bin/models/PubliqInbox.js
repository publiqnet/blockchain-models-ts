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
var PubliqLetter_1 = require("./PubliqLetter");
var PubliqInbox = /** @class */ (function (_super) {
    __extends(PubliqInbox, _super);
    function PubliqInbox(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.items = data.items.map(function (d) { return new PubliqLetter_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqInbox, "PropertyMap", {
        get: function () {
            return {
                items: 'items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqInbox, "Rtt", {
        get: function () {
            return 116;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqInbox;
}(BaseModel_1.default));
exports.default = PubliqInbox;
