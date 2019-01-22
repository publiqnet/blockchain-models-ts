"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapper_1 = require("../mapper");
var test_data_1 = require("./test-data");
var PubliqTransaction_1 = require("../models/PubliqTransaction");
var tetsModels = function () {
    console.log("===================start models===============");
    for (var data in test_data_1.JSON_DATA) {
        console.log(mapper_1.parceToModel(JSON.stringify(test_data_1.JSON_DATA[data])));
    }
};
var tetsJson = function () {
    console.log("===================start json===============");
    for (var data in test_data_1.JSON_DATA) {
        var obj = mapper_1.parceToModel(JSON.stringify(test_data_1.JSON_DATA[data]));
        console.log(mapper_1.parceToJson(obj), '\n');
    }
};
// tetsJson();
var testPubliqTransaction = function () {
    var now = new Date();
    var now_1h = new Date(now.getTime() + (60 * 60 * 1000));
    var transactionObj = new PubliqTransaction_1.default({
        creation: +now,
        expiry: +now_1h,
        fee: {
            whole: 0, fraction: 0
        },
        action: {} //transferObj,
    });
    console.log(transactionObj.toJson());
};
testPubliqTransaction();
