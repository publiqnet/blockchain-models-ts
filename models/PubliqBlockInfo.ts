import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqRewardInfo from './PubliqRewardInfo';
import PubliqTransactionInfo from './PubliqTransactionInfo';

export default class PubliqBlockInfo extends BaseModel {

    authority: string;
    blockHash: string;
    timeSigned: Date;
    rewards: Array<PubliqRewardInfo>;
    transactions: Array<PubliqTransactionInfo>;

    constructor(data) { 
        super();
        this.authority = data.authority;
        this.blockHash = data.block_hash;
        this.timeSigned = new Date(data.time_signed);
        this.rewards = data.rewards.map(d => new PubliqRewardInfo(d));
        this.transactions = data.transactions.map(d => new PubliqTransactionInfo(d));
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
