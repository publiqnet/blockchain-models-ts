"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqStorageOrder_1 = require("./models/PubliqStorageOrder");
var PubliqSignedStorageOrder_1 = require("./models/PubliqSignedStorageOrder");
var PubliqAuthority_1 = require("./models/PubliqAuthority");
var PubliqSignRequest_1 = require("./models/PubliqSignRequest");
var PubliqVerificationResponse_1 = require("./models/PubliqVerificationResponse");
var PubliqRemoteError_1 = require("./models/PubliqRemoteError");
var MODELS_TYPES = [
    PubliqStorageOrder_1.default,
    PubliqSignedStorageOrder_1.default,
    PubliqAuthority_1.default,
    PubliqSignRequest_1.default,
    PubliqVerificationResponse_1.default,
    PubliqRemoteError_1.default,
];
exports.createInstanceFromJson = function (data) {
    if (data.constructor.Rtt !== undefined) {
        return data;
    }
    if (data.rtt !== undefined) {
        var ModelClass = MODELS_TYPES[data.rtt];
        if (!ModelClass) {
            throw new Error("invalid model class");
        }
        return new ModelClass(data);
    }
    return data;
};
exports.default = MODELS_TYPES;
