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
var typescript_is_1 = require("typescript-is");
var ModelTypes_1 = require("../ModelTypes");
var PubliqTaskRequest = /** @class */ (function (_super) {
    __extends(PubliqTaskRequest, _super);
    function PubliqTaskRequest(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            var _package = ModelTypes_1.createInstanceFromJson(data.package);
            if (typescript_is_1.is(_package)) {
                _this.package = _package;
            }
            else {
                throw new Error("Type Error: PubliqTaskRequest package is not a Object");
            }
            var _taskId = data.task_id === undefined ? data.taskId : data.task_id;
            if (typescript_is_1.is(_taskId)) {
                _this.taskId = _taskId;
            }
            else {
                throw new Error("Type Error: PubliqTaskRequest taskId is not a number");
            }
            var _signature = data.signature;
            if (typescript_is_1.is(_signature)) {
                _this.signature = _signature;
            }
            else {
                throw new Error("Type Error: PubliqTaskRequest signature is not a string");
            }
            var _timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
            if (typescript_is_1.is(_timeSigned)) {
                _this.timeSigned = _timeSigned;
            }
            else {
                throw new Error("Type Error: PubliqTaskRequest timeSigned is not a Date");
            }
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
            return 107;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqTaskRequest;
}(BaseModel_1.default));
exports.default = PubliqTaskRequest;
