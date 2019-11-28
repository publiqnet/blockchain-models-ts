import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStorageOrder from './PubliqStorageOrder';

export default class PubliqVerificationResponse extends BaseModel {

    storageOrder: PubliqStorageOrder;
    address: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.storageOrder = new PubliqStorageOrder(data.storage_order === undefined ?  data.storageOrder: data.storage_order);
            this.address = data.address;
        }
    }

    static get PropertyMap () {
        return {
            storageOrder : 'storage_order',
            address : 'address',
        }
    }

    static get Rtt () {
        return 4;
    }

} 
