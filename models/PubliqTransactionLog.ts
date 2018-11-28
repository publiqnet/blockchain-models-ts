import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransactionLog extends BaseModel {

    fee: PubliqCoin;
    action: Object;
    transactionHash: string;
    timeSigned: Date;

    constructor(data) { 
        super();
        this.fee = new PubliqCoin(data.fee);
        this.action = createInstanceFromJson(data.action);
        this.transactionHash = data.transaction_hash;
        this.timeSigned = new Date(data.time_signed);
    }

    static get PropertyMap () {
        return {
            fee : 'fee',
            action : 'action',
            transactionHash : 'transaction_hash',
            timeSigned : 'time_signed',
        }
    }

    static get Rtt () {
        return 8;
    }

} 
