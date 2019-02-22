import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';

export default class PubliqAddressInfo extends BaseModel {

    nodeAddress: string;
    ipAddress: PubliqIPAddress;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.ipAddress = new PubliqIPAddress(data.ip_address === undefined ?  data.ipAddress: data.ip_address);
        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            ipAddress : 'ip_address',
        }
    }

    static get Rtt () {
        return 16;
    }

} 
