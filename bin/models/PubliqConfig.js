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
var PubliqIPAddress_1 = require("./PubliqIPAddress");
var PubliqCoin_1 = require("./PubliqCoin");
var PubliqConfig = /** @class */ (function (_super) {
    __extends(PubliqConfig, _super);
    function PubliqConfig(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            if (data.p2pBindToAddress !== undefined) {
                _this.p2pBindToAddress = new PubliqIPAddress_1.default(data.p2p_bind_to_address === undefined ? data.p2pBindToAddress : data.p2p_bind_to_address);
            }
            if (data.p2pConnectToAddresses !== undefined) {
                _this.p2pConnectToAddresses = data.p2p_connect_to_addresses === undefined ? data.p2pConnectToAddresses.map(function (d) { return new PubliqIPAddress_1.default(d); }) : data.p2p_connect_to_addresses.map(function (d) { return new PubliqIPAddress_1.default(d); });
            }
            if (data.rpcBindToAddress !== undefined) {
                _this.rpcBindToAddress = new PubliqIPAddress_1.default(data.rpc_bind_to_address === undefined ? data.rpcBindToAddress : data.rpc_bind_to_address);
            }
            if (data.slaveBindToAddress !== undefined) {
                _this.slaveBindToAddress = new PubliqIPAddress_1.default(data.slave_bind_to_address === undefined ? data.slaveBindToAddress : data.slave_bind_to_address);
            }
            if (data.publicAddress !== undefined) {
                _this.publicAddress = new PubliqIPAddress_1.default(data.public_address === undefined ? data.publicAddress : data.public_address);
            }
            if (data.publicSslAddress !== undefined) {
                _this.publicSslAddress = new PubliqIPAddress_1.default(data.public_ssl_address === undefined ? data.publicSslAddress : data.public_ssl_address);
            }
            if (data.privateKey !== undefined) {
                _this.privateKey = data.private_key === undefined ? data.privateKey : data.private_key;
            }
            if (data.privateKeys !== undefined) {
                _this.privateKeys = data.private_keys === undefined ? data.privateKeys : data.private_keys;
            }
            if (data.managerAddress !== undefined) {
                _this.managerAddress = data.manager_address === undefined ? data.managerAddress : data.manager_address;
            }
            if (data.nodeType !== undefined) {
                _this.nodeType = data.node_type === undefined ? data.nodeType : data.node_type;
            }
            if (data.automaticFee !== undefined) {
                _this.automaticFee = new PubliqCoin_1.default(data.automatic_fee === undefined ? data.automaticFee : data.automatic_fee);
            }
            if (data.enableActionLog !== undefined) {
                _this.enableActionLog = data.enable_action_log === undefined ? data.enableActionLog : data.enable_action_log;
            }
            if (data.enableInbox !== undefined) {
                _this.enableInbox = data.enable_inbox === undefined ? data.enableInbox : data.enable_inbox;
            }
            if (data.testnet !== undefined) {
                _this.testnet = data.testnet;
            }
            if (data.discoveryServer !== undefined) {
                _this.discoveryServer = data.discovery_server === undefined ? data.discoveryServer : data.discovery_server;
            }
            if (data.transferOnly !== undefined) {
                _this.transferOnly = data.transfer_only === undefined ? data.transferOnly : data.transfer_only;
            }
        }
        return _this;
    }
    Object.defineProperty(PubliqConfig, "PropertyMap", {
        get: function () {
            return {
                p2pBindToAddress: 'p2p_bind_to_address',
                p2pConnectToAddresses: 'p2p_connect_to_addresses',
                rpcBindToAddress: 'rpc_bind_to_address',
                slaveBindToAddress: 'slave_bind_to_address',
                publicAddress: 'public_address',
                publicSslAddress: 'public_ssl_address',
                privateKey: 'private_key',
                privateKeys: 'private_keys',
                managerAddress: 'manager_address',
                nodeType: 'node_type',
                automaticFee: 'automatic_fee',
                enableActionLog: 'enable_action_log',
                enableInbox: 'enable_inbox',
                testnet: 'testnet',
                discoveryServer: 'discovery_server',
                transferOnly: 'transfer_only',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqConfig, "Rtt", {
        get: function () {
            return 117;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqConfig;
}(BaseModel_1.default));
exports.default = PubliqConfig;
