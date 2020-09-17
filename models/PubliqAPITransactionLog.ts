import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPITransactionLog extends BaseModel {

    fee: PubliqAPICoin;
    action: Object;
    transactionHash: string;
    transactionSize: number;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.fee = new PubliqAPICoin(data.fee);
            this.action = createInstanceFromJson(data.action);
            this.transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
            this.transactionSize = data.transaction_size === undefined ?  data.transactionSize: data.transaction_size;
            this.timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
        }
    }

    static get PropertyMap () {
        return {
            fee : 'fee',
            action : 'action',
            transactionHash : 'transaction_hash',
            transactionSize : 'transaction_size',
            timeSigned : 'time_signed',
        }
    }

    static get Rtt () {
        return 10;
    }

} 
