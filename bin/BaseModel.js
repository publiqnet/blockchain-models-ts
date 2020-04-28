"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqNodeType_1 = require("./models/PubliqNodeType");
var dateToFormatString = function (d) {
    var addZero = function (d) {
        return d.length == 2 ? d : "0" + d;
    };
    var year = d.getUTCFullYear().toString();
    var month = (d.getUTCMonth() + 1).toString();
    var day = d.getUTCDate().toString();
    var hours = d.getUTCHours().toString();
    var minutes = d.getUTCMinutes().toString();
    var seconds = d.getUTCSeconds().toString();
    return year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
};
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    Object.defineProperty(BaseModel, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.setProperty = function (propertyName, propertyValue, toObject, constructor) {
        var PropertyMap = constructor.PropertyMap || BaseModel.PropertyMap;
        var pn = PropertyMap[propertyName] || propertyName;
        toObject[pn] = propertyValue;
    };
    BaseModel.hasRtt = function (type) {
        if (type.Rtt !== undefined) {
            return true;
        }
        return false;
    };
    BaseModel.getRtt = function (type) {
        return type.Rtt;
    };
    BaseModel.getDataWithRtt = function (data) {
        if (data.constructor === Date) {
            return dateToFormatString(data);
        }
        if (data.constructor === Array) {
            return data.map(function (d) {
                if (d.constructor !== Function) {
                    return BaseModel.getDataWithRtt(d);
                }
            });
        }
        // if(data.constructor("Publiq")){
        //
        // }
        if (data instanceof Object) {
            var dataWithRtt = {};
            if (BaseModel.hasRtt(data.constructor)) {
                dataWithRtt['rtt'] = BaseModel.getRtt(data.constructor);
            }
            for (var i in data) {
                var pv = data[i];
                var constructor = pv.constructor;
                var propertySetValue = void 0;
                if (constructor === Function) {
                    continue;
                }
                else if (constructor.name === 'PubliqRole' && !isNaN(pv.nodeType)) {
                    pv.nodeType = PubliqNodeType_1.default.toString(pv.nodeType);
                    propertySetValue = pv;
                }
                // else if (constructor === Array){
                //     propertySetValue = pv.map(d => {
                //         if(d.constructor !== Function){
                //             return  BaseModel.getDataWithRtt(d)
                //         }
                //     });
                // }
                // else if(BaseModel.hasRtt(constructor)){
                //     propertySetValue = BaseModel.getDataWithRtt(pv);
                //
                // }
                // else if(constructor === Date) {
                //     propertySetValue = BaseModel.getDataWithRtt(pv);//dateToFormatString(pv);
                // }
                else {
                    propertySetValue = BaseModel.getDataWithRtt(pv);
                }
                BaseModel.setProperty(i, propertySetValue, dataWithRtt, data.constructor);
            }
            return dataWithRtt;
        }
        return data;
    };
    BaseModel.prototype.toJson = function () {
        return BaseModel.getDataWithRtt(this);
    };
    return BaseModel;
}());
exports.default = BaseModel;
