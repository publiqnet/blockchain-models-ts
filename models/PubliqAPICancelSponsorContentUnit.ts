import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPICancelSponsorContentUnit extends BaseModel {

    sponsorAddress: string;
    uri: string;
    transactionHash: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.sponsorAddress = data.sponsor_address === undefined ?  data.sponsorAddress: data.sponsor_address;
            this.uri = data.uri;
            this.transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
        }
    }

    static get PropertyMap () {
        return {
            sponsorAddress : 'sponsor_address',
            uri : 'uri',
            transactionHash : 'transaction_hash',
        }
    }

    static get Rtt () {
        return 39;
    }

} 
