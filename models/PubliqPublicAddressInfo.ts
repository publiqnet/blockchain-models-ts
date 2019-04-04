import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPDestination from './PubliqIPDestination';

export default class PubliqPublicAddressInfo extends BaseModel {

    ipDestination: PubliqIPDestination;
    nodeAddress: string;
    secondsSinceChecked: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ipDestination = new PubliqIPDestination(data.ip_destination === undefined ?  data.ipDestination: data.ip_destination);
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.secondsSinceChecked = data.seconds_since_checked === undefined ?  data.secondsSinceChecked: data.seconds_since_checked;
        }
    }

    static get PropertyMap () {
        return {
            ipDestination : 'ip_destination',
            nodeAddress : 'node_address',
            secondsSinceChecked : 'seconds_since_checked',
        }
    }

    static get Rtt () {
        return 66;
    }

} 
