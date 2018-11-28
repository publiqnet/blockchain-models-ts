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
var PubliqStatItem = /** @class */ (function (_super) {
    __extends(PubliqStatItem, _super);
    function PubliqStatItem(data) {
        var _this = _super.call(this) || this;
        _this.nodeName = data.node_name;
        _this.contentHash = data.content_hash;
        _this.passCount = data.pass_count;
        _this.failCount = data.fail_count;
        return _this;
    }
    Object.defineProperty(PubliqStatItem, "PropertyMap", {
        get: function () {
            return {
                nodeName: 'node_name',
                contentHash: 'content_hash',
                passCount: 'pass_count',
                failCount: 'fail_count',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStatItem, "Rtt", {
        get: function () {
            return 18;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStatItem;
}(BaseModel_1.default));
exports.default = PubliqStatItem;
