import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqGetStorageFile extends BaseModel {

    uri: string;
    nodeAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            nodeAddress : 'node_address',
        }
    }

    static get Rtt () {
        return 49;
    }

} 
