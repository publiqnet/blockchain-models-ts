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
var PubliqTaskRequest = /** @class */ (function (_super) {
    __extends(PubliqTaskRequest, _super);
    function PubliqTaskRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.package = ModelTypes_1.createInstanceFromJson(data.package);
            _this.taskId = data.task_id === undefined ? data.taskId : data.task_id;
            _this.signature = data.signature;
            _this.timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
        }
        return _this;
    }
    Object.defineProperty(PubliqTaskRequest, "PropertyMap", {
        get: function () {
            return {
                package: 'package',
                taskId: 'task_id',
                signature: 'signature',
                timeSigned: 'time_signed',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqTaskRequest, "Rtt", {
        get: function () {
            return 54;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTaskRequest;
}(BaseModel_1.default));
exports.default = PubliqTaskRequest;
