import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';

export default class PubliqAddressInfo extends BaseModel {

    nodeId: string;
    ipAddress: PubliqIPAddress;

    constructor(data) { 
        super();
        this.nodeId = data.node_id;
        this.ipAddress = new PubliqIPAddress(data.ip_address);
    }

    static get PropertyMap () {
        return {
            nodeId : 'node_id',
            ipAddress : 'ip_address',
        }
    }

    static get Rtt () {
        return 15;
    }

} 
