import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqRewardInfo from './PubliqRewardInfo';
import PubliqTransactionInfo from './PubliqTransactionInfo';

export default class PubliqBlockInfo extends BaseModel {

    authority: string;
    blockHash: string;
    signTime: Date;
    rewards: Array<PubliqRewardInfo>;
    transactions: Array<PubliqTransactionInfo>;

    constructor(data) { 
        super();
        this.authority = data.authority;
        this.blockHash = data.block_hash;
        this.signTime = new Date(data.sign_time);
        this.rewards = data.rewards.map(d => new PubliqRewardInfo(d));
        this.transactions = data.transactions.map(d => new PubliqTransactionInfo(d));
    }

    static get PropertyMap () {
        return {
            authority : 'authority',
            blockHash : 'block_hash',
            signTime : 'sign_time',
            rewards : 'rewards',
            transactions : 'transactions',
        }
    }

    static get Rtt () {
        return 38;
    }

} 
