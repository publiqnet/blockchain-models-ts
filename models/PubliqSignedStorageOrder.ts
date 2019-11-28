import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStorageOrder from './PubliqStorageOrder';
import PubliqAuthority from './PubliqAuthority';

export default class PubliqSignedStorageOrder extends BaseModel {

    order: PubliqStorageOrder;
    authorization: PubliqAuthority;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.order = new PubliqStorageOrder(data.order);
            this.authorization = new PubliqAuthority(data.authorization);
        }
    }

    static get PropertyMap () {
        return {
            order : 'order',
            authorization : 'authorization',
        }
    }

    static get Rtt () {
        return 1;
    }

} 
