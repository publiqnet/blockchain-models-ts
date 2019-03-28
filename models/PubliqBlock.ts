import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeader from './PubliqBlockHeader';
import PubliqReward from './PubliqReward';
import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqBlock extends BaseModel {

    header: PubliqBlockHeader;
    rewards: Array<PubliqReward>;
    signedTransactions: Array<PubliqSignedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.header = new PubliqBlockHeader(data.header);
            this.rewards = data.rewards.map(d => new PubliqReward(d));
            this.signedTransactions = data.signed_transactions === undefined ? data.signedTransactions.map(d => new PubliqSignedTransaction(d)) : data.signed_transactions.map(d => new PubliqSignedTransaction(d));
        }
    }

    static get PropertyMap () {
        return {
            header : 'header',
            rewards : 'rewards',
            signedTransactions : 'signed_transactions',
        }
    }

    static get Rtt () {
        return 7;
    }

} 
