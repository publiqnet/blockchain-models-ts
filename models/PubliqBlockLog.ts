import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqRewardLog from './PubliqRewardLog';
import PubliqTransactionLog from './PubliqTransactionLog';

export default class PubliqBlockLog extends BaseModel {

    authority: string;
    blockHash: string;
    blockNumber: number;
    blockSize: number;
    timeSigned: Date;
    rewards: Array<PubliqRewardLog>;
    transactions: Array<PubliqTransactionLog>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.authority = data.authority;
            this.blockHash = data.block_hash === undefined ?  data.blockHash: data.block_hash;
            this.blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
            this.blockSize = data.block_size === undefined ?  data.blockSize: data.block_size;
            this.timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
            this.rewards = data.rewards.map(d => new PubliqRewardLog(d));
            this.transactions = data.transactions.map(d => new PubliqTransactionLog(d));
        }
    }

    static get PropertyMap () {
        return {
            authority : 'authority',
            blockHash : 'block_hash',
            blockNumber : 'block_number',
            blockSize : 'block_size',
            timeSigned : 'time_signed',
            rewards : 'rewards',
            transactions : 'transactions',
        }
    }

    static get Rtt () {
        return 9;
    }

} 
