import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqPublicAddressInfo from './PubliqPublicAddressInfo';

export default class PubliqPublicAddressesInfo extends BaseModel {

    addressesInfo: Array<PubliqPublicAddressInfo>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.addressesInfo = data.addresses_info === undefined ? data.addressesInfo.map(d => new PubliqPublicAddressInfo(d)) : data.addresses_info.map(d => new PubliqPublicAddressInfo(d));
        }
    }

    static get PropertyMap () {
        return {
            addressesInfo : 'addresses_info',
        }
    }

    static get Rtt () {
        return 76;
    }

} 
