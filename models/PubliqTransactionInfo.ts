import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransactionInfo extends BaseModel {

    fee: PubliqCoin;
    action: Object;
    creationTime: Date;
    transactionHash: string;

    constructor(data) { 
        super();
        this.fee = new PubliqCoin(data.fee);
        this.action = createInstanceFromJson(data.action);
        this.creationTime = new Date(data.creation_time);
        this.transactionHash = data.transaction_hash;
    }

    static get PropertyMap () {
        return {
            fee : 'fee',
            action : 'action',
            creationTime : 'creation_time',
            transactionHash : 'transaction_hash',
        }
    }

    static get Rtt () {
        return 38;
    }

} 
