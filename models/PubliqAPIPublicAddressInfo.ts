import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIIPAddress from './PubliqAPIIPAddress';

export default class PubliqAPIPublicAddressInfo extends BaseModel {

    ipAddress: PubliqAPIIPAddress;
    sslIpAddress: PubliqAPIIPAddress;
    nodeAddress: string;
    secondsSinceChecked: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ipAddress = new PubliqAPIIPAddress(data.ip_address === undefined ?  data.ipAddress: data.ip_address);
            this.sslIpAddress = new PubliqAPIIPAddress(data.ssl_ip_address === undefined ?  data.sslIpAddress: data.ssl_ip_address);
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.secondsSinceChecked = data.seconds_since_checked === undefined ?  data.secondsSinceChecked: data.seconds_since_checked;
        }
    }

    static get PropertyMap () {
        return {
            ipAddress : 'ip_address',
            sslIpAddress : 'ssl_ip_address',
            nodeAddress : 'node_address',
            secondsSinceChecked : 'seconds_since_checked',
        }
    }

    static get Rtt () {
        return 77;
    }

} 
