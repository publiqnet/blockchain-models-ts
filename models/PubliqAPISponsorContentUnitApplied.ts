import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPISponsorContentUnitApplied extends BaseModel {

    amount: PubliqAPICoin;
    transactionHash: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.amount = new PubliqAPICoin(data.amount);
            this.transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
        }
    }

    static get PropertyMap () {
        return {
            amount : 'amount',
            transactionHash : 'transaction_hash',
        }
    }

    static get Rtt () {
        return 83;
    }

} 
