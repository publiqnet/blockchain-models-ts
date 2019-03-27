import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


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

           const _header = new PubliqBlockHeader(data.header);
           if(is<PubliqBlockHeader>(_header)){
               this.header = _header
           } else {
               throw new Error(`Type Error: PubliqBlock header is not a PubliqBlockHeader`)
           }

           const _rewards = data.rewards.map(d => new PubliqReward(d));
           if(is<Array<PubliqReward>>(_rewards)){
               this.rewards = _rewards
           } else {
               throw new Error(`Type Error: PubliqBlock rewards is not a Array<PubliqReward>`)
           }

           const _signedTransactions = data.signed_transactions === undefined ? data.signedTransactions.map(d => new PubliqSignedTransaction(d)) : data.signed_transactions.map(d => new PubliqSignedTransaction(d));
           if(is<Array<PubliqSignedTransaction>>(_signedTransactions)){
               this.signedTransactions = _signedTransactions
           } else {
               throw new Error(`Type Error: PubliqBlock signedTransactions is not a Array<PubliqSignedTransaction>`)
           }

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
