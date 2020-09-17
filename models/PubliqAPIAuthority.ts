import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIAuthority extends BaseModel {

    address: string;
    signature: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.address = data.address;
            this.signature = data.signature;
        }
    }

    static get PropertyMap () {
        return {
            address : 'address',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 3;
    }

} 
