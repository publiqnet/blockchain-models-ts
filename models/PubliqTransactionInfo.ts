import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransactionInfo extends BaseModel {

    fee: PubliqCoin;
    action: Object;
    transactionHash: string;
    signTime: Date;

    constructor(data) { 
        super();
        this.fee = new PubliqCoin(data.fee);
        this.action = createInstanceFromJson(data.action);
        this.transactionHash = data.transaction_hash;
        this.signTime = new Date(data.sign_time);
    }

    static get PropertyMap () {
        return {
            fee : 'fee',
            action : 'action',
            transactionHash : 'transaction_hash',
            signTime : 'sign_time',
        }
    }

    static get Rtt () {
        return 12;
    }

} 
