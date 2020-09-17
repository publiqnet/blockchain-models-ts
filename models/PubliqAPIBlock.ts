import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIBlockHeader from './PubliqAPIBlockHeader';
import PubliqAPIReward from './PubliqAPIReward';
import PubliqAPISignedTransaction from './PubliqAPISignedTransaction';

export default class PubliqAPIBlock extends BaseModel {

    header: PubliqAPIBlockHeader;
    rewards: Array<PubliqAPIReward>;
    signedTransactions: Array<PubliqAPISignedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.header = new PubliqAPIBlockHeader(data.header);
            this.rewards = data.rewards.map(d => new PubliqAPIReward(d));
            this.signedTransactions = data.signed_transactions === undefined ? data.signedTransactions.map(d => new PubliqAPISignedTransaction(d)) : data.signed_transactions.map(d => new PubliqAPISignedTransaction(d));
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
