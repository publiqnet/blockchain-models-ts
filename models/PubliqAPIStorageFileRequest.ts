import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIStorageFileRequest extends BaseModel {

    uri: string;
    storageOrderToken: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.storageOrderToken = data.storage_order_token === undefined ?  data.storageOrderToken: data.storage_order_token;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            storageOrderToken : 'storage_order_token',
        }
    }

    static get Rtt () {
        return 110;
    }

} 
