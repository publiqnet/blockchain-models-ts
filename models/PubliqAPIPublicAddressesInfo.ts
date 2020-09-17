import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIPublicAddressInfo from './PubliqAPIPublicAddressInfo';

export default class PubliqAPIPublicAddressesInfo extends BaseModel {

    addressesInfo: Array<PubliqAPIPublicAddressInfo>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.addressesInfo = data.addresses_info === undefined ? data.addressesInfo.map(d => new PubliqAPIPublicAddressInfo(d)) : data.addresses_info.map(d => new PubliqAPIPublicAddressInfo(d));
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
