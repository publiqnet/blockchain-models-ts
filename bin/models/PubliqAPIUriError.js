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
var PubliqAPIUriError = /** @class */ (function (_super) {
    __extends(PubliqAPIUriError, _super);
    function PubliqAPIUriError(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.uri = data.uri;
            _this.uriProblemType = data.uri_problem_type === undefined ? data.uriProblemType : data.uri_problem_type;
        }
        return _this;
    }
    Object.defineProperty(PubliqAPIUriError, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                uriProblemType: 'uri_problem_type',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAPIUriError, "Rtt", {
        get: function () {
            return 95;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAPIUriError;
}(BaseModel_1.default));
exports.default = PubliqAPIUriError;
