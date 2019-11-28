"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqPublicAddressType = /** @class */ (function () {
    function PubliqPublicAddressType() {
    }
    PubliqPublicAddressType.toString = function (param) {
        switch (param) {
            case 0: return "p2p";
            case 1: return "rpc";
        }
    };
    PubliqPublicAddressType.toNumber = function (param) {
        switch (param) {
            case "p2p": return 0;
            case "rpc": return 1;
        }
    };
    PubliqPublicAddressType.p2p = 0;
    PubliqPublicAddressType.rpc = 1;
    return PubliqPublicAddressType;
}());
exports.default = PubliqPublicAddressType;
