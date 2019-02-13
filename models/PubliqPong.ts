import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPong extends BaseModel {

    nodeid: string;
    stamp: Date;
    signature: string;

    constructor(data) { 
        super();
        this.nodeid = data.nodeid;
        this.stamp = new Date(data.stamp);
        this.signature = data.signature;
    }

    static get PropertyMap () {
        return {
            nodeid : 'nodeid',
            stamp : 'stamp',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 54;
    }

} 
