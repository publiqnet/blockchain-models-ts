import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqServed extends BaseModel {

    storageOrderToken: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.storageOrderToken = data.storage_order_token === undefined ?  data.storageOrderToken: data.storage_order_token;
        }
    }

    static get PropertyMap () {
        return {
            storageOrderToken : 'storage_order_token',
        }
    }

    static get Rtt () {
        return 80;
    }

} 
