import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';

export default class PubliqPublicAddressInfo extends BaseModel {

    ipAddress: PubliqIPAddress;
    nodeAddress: string;
    secondsSinceChecked: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ipAddress = new PubliqIPAddress(data.ip_address === undefined ?  data.ipAddress: data.ip_address);
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.secondsSinceChecked = data.seconds_since_checked === undefined ?  data.secondsSinceChecked: data.seconds_since_checked;
        }
    }

    static get PropertyMap () {
        return {
            ipAddress : 'ip_address',
            nodeAddress : 'node_address',
            secondsSinceChecked : 'seconds_since_checked',
        }
    }

    static get Rtt () {
        return 77;
    }

} 
