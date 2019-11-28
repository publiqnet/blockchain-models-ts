import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqSponsorContentUnitApplied extends BaseModel {

    amount: PubliqCoin;
    transactionHash: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.amount = new PubliqCoin(data.amount);
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
