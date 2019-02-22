import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentInfo extends BaseModel {

    uri: string;
    storageAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            storageAddress : 'storage_address',
        }
    }

    static get Rtt () {
        return 18;
    }

} 
