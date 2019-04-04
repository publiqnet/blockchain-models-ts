import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPong extends BaseModel {

    nodeAddress: string;
    stamp: Date;
    signature: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.stamp = new Date(data.stamp);
            this.signature = data.signature;
        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            stamp : 'stamp',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 40;
    }

} 
