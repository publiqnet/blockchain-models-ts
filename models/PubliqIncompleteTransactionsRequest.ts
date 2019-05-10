import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqIncompleteTransactionsRequest extends BaseModel {

    address: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.address = data.address;
        }
    }

    static get PropertyMap () {
        return {
            address : 'address',
        }
    }

    static get Rtt () {
        return 67;
    }

} 
