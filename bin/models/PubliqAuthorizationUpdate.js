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
var PubliqAuthorizationUpdate = /** @class */ (function (_super) {
    __extends(PubliqAuthorizationUpdate, _super);
    function PubliqAuthorizationUpdate(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.updateType = data.update_type === undefined ? data.updateType : data.update_type;
            _this.owner = data.owner;
            _this.actor = data.actor;
            _this.actionIds = data.action_ids === undefined ? data.actionIds : data.action_ids;
        }
        return _this;
    }
    Object.defineProperty(PubliqAuthorizationUpdate, "PropertyMap", {
        get: function () {
            return {
                updateType: 'update_type',
                owner: 'owner',
                actor: 'actor',
                actionIds: 'action_ids',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqAuthorizationUpdate, "Rtt", {
        get: function () {
            return 14;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqAuthorizationUpdate;
}(BaseModel_1.default));
exports.default = PubliqAuthorizationUpdate;
