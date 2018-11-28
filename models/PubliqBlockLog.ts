import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqRewardLog from './PubliqRewardLog';
import PubliqTransactionLog from './PubliqTransactionLog';

export default class PubliqBlockLog extends BaseModel {

    authority: string;
    blockHash: string;
    timeSigned: Date;
    rewards: Array<PubliqRewardLog>;
    transactions: Array<PubliqTransactionLog>;

    constructor(data) { 
        super();
        this.authority = data.authority;
        this.blockHash = data.block_hash;
        this.timeSigned = new Date(data.time_signed);
        this.rewards = data.rewards.map(d => new PubliqRewardLog(d));
        this.transactions = data.transactions.map(d => new PubliqTransactionLog(d));
    }

    static get PropertyMap () {
        return {
            authority : 'authority',
            blockHash : 'block_hash',
            timeSigned : 'time_signed',
            rewards : 'rewards',
            transactions : 'transactions',
        }
    }

    static get Rtt () {
        return 9;
    }

} 
