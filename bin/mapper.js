"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelTypes_1 = require("./ModelTypes");
exports.parceToModel = function (jsonData) {
    var data = JSON.parse(jsonData);
    var ModelClass = ModelTypes_1.default[data.rtt];
    if (!ModelClass) {
        throw new Error("invalid model class");
    }
    return new ModelClass(data);
};
exports.parceToJson = function (typedData) {
    return JSON.stringify(typedData.toJson());
};
