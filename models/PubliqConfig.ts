import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';
import { PubliqNodeType } from './PubliqNodeType';
import PubliqCoin from './PubliqCoin';

export default class PubliqConfig extends BaseModel {

    p2pBindToAddress?: PubliqIPAddress;
    p2pConnectToAddresses?: Array<PubliqIPAddress>;
    rpcBindToAddress?: PubliqIPAddress;
    slaveBindToAddress?: PubliqIPAddress;
    publicAddress?: PubliqIPAddress;
    publicSslAddress?: PubliqIPAddress;
    privateKey?: string;
    privateKeys?: Array<string>;
    managerAddress?: string;
    nodeType?: PubliqNodeType;
    automaticFee?: PubliqCoin;
    enableActionLog?: boolean;
    enableInbox?: boolean;
    testnet?: boolean;
    discoveryServer?: boolean;
    transferOnly?: boolean;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            if (data.p2pBindToAddress !== undefined) { this.p2pBindToAddress = new PubliqIPAddress(data.p2p_bind_to_address === undefined ?  data.p2pBindToAddress: data.p2p_bind_to_address);}
             if (data.p2pConnectToAddresses !== undefined) { this.p2pConnectToAddresses = data.p2p_connect_to_addresses === undefined ? data.p2pConnectToAddresses.map(d => new PubliqIPAddress(d)) : data.p2p_connect_to_addresses.map(d => new PubliqIPAddress(d));}
            if (data.rpcBindToAddress !== undefined) { this.rpcBindToAddress = new PubliqIPAddress(data.rpc_bind_to_address === undefined ?  data.rpcBindToAddress: data.rpc_bind_to_address);}
            if (data.slaveBindToAddress !== undefined) { this.slaveBindToAddress = new PubliqIPAddress(data.slave_bind_to_address === undefined ?  data.slaveBindToAddress: data.slave_bind_to_address);}
            if (data.publicAddress !== undefined) { this.publicAddress = new PubliqIPAddress(data.public_address === undefined ?  data.publicAddress: data.public_address);}
            if (data.publicSslAddress !== undefined) { this.publicSslAddress = new PubliqIPAddress(data.public_ssl_address === undefined ?  data.publicSslAddress: data.public_ssl_address);}
            if (data.privateKey !== undefined) { this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;}
            if (data.privateKeys !== undefined) { this.privateKeys = data.private_keys === undefined ?  data.privateKeys: data.private_keys;}
            if (data.managerAddress !== undefined) { this.managerAddress = data.manager_address === undefined ?  data.managerAddress: data.manager_address;}
            if (data.nodeType !== undefined) { this.nodeType = data.node_type === undefined ?  data.nodeType: data.node_type;}
            if (data.automaticFee !== undefined) { this.automaticFee = new PubliqCoin(data.automatic_fee === undefined ?  data.automaticFee: data.automatic_fee);}
            if (data.enableActionLog !== undefined) { this.enableActionLog = data.enable_action_log === undefined ?  data.enableActionLog: data.enable_action_log;}
            if (data.enableInbox !== undefined) { this.enableInbox = data.enable_inbox === undefined ?  data.enableInbox: data.enable_inbox;}
            if (data.testnet !== undefined) { this.testnet = data.testnet;}
            if (data.discoveryServer !== undefined) { this.discoveryServer = data.discovery_server === undefined ?  data.discoveryServer: data.discovery_server;}
            if (data.transferOnly !== undefined) { this.transferOnly = data.transfer_only === undefined ?  data.transferOnly: data.transfer_only;}
        }
    }

    static get PropertyMap () {
        return {
            p2pBindToAddress : 'p2p_bind_to_address',
            p2pConnectToAddresses : 'p2p_connect_to_addresses',
            rpcBindToAddress : 'rpc_bind_to_address',
            slaveBindToAddress : 'slave_bind_to_address',
            publicAddress : 'public_address',
            publicSslAddress : 'public_ssl_address',
            privateKey : 'private_key',
            privateKeys : 'private_keys',
            managerAddress : 'manager_address',
            nodeType : 'node_type',
            automaticFee : 'automatic_fee',
            enableActionLog : 'enable_action_log',
            enableInbox : 'enable_inbox',
            testnet : 'testnet',
            discoveryServer : 'discovery_server',
            transferOnly : 'transfer_only',
        }
    }

    static get Rtt () {
        return 117;
    }

} 
