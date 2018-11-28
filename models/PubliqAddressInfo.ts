import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAddressInfo extends BaseModel {

    owner: string;
    publicAddress: string;

    constructor(data) { 
        super();
        this.owner = data.owner;
        this.publicAddress = data.public_address;
    }

    static get PropertyMap () {
        return {
            owner : 'owner',
            publicAddress : 'public_address',
        }
    }

    static get Rtt () {
        return 15;
    }

} 
