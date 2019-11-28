import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStorageOrder from './PubliqStorageOrder';

export default class PubliqSignRequest extends BaseModel {

    privateKey: string;
    order: PubliqStorageOrder;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
            this.order = new PubliqStorageOrder(data.order);
        }
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
            order : 'order',
        }
    }

    static get Rtt () {
        return 3;
    }

} 
