import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqPublicAddressType } from './PubliqPublicAddressType';

export default class PubliqPublicAddressesRequest extends BaseModel {

    addressType: PubliqPublicAddressType;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.addressType = data.address_type === undefined ?  data.addressType: data.address_type;
        }
    }

    static get PropertyMap () {
        return {
            addressType : 'address_type',
        }
    }

    static get Rtt () {
        return 75;
    }

} 
