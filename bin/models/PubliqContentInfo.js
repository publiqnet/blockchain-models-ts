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
var PubliqContentInfo = /** @class */ (function (_super) {
    __extends(PubliqContentInfo, _super);
    function PubliqContentInfo(data) {
        var _this = _super.call(this) || this;
        _this.nodeName = data.node_name;
        _this.contentHash = data.content_hash;
        return _this;
    }
    Object.defineProperty(PubliqContentInfo, "PropertyMap", {
        get: function () {
            return {
                nodeName: 'node_name',
                contentHash: 'content_hash',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentInfo, "Rtt", {
        get: function () {
            return 17;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentInfo;
}(BaseModel_1.default));
exports.default = PubliqContentInfo;
