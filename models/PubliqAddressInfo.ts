import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';

export default class PubliqAddressInfo extends BaseModel {

    nodeAddress: string;
    ipAddress: PubliqIPAddress;
    sslIpAddress: PubliqIPAddress;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.ipAddress = new PubliqIPAddress(data.ip_address === undefined ?  data.ipAddress: data.ip_address);
            this.sslIpAddress = new PubliqIPAddress(data.ssl_ip_address === undefined ?  data.sslIpAddress: data.ssl_ip_address);
        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            ipAddress : 'ip_address',
            sslIpAddress : 'ssl_ip_address',
        }
    }

    static get Rtt () {
        return 33;
    }

} 
