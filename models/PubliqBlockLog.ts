import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


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

           const _authority = data.authority;
           if(is<string>(_authority)){
               this.authority = _authority
           } else {
               throw new Error(`Type Error: PubliqBlockLog authority is not a string`)
           }

           const _blockHash = data.block_hash === undefined ?  data.blockHash: data.block_hash;
           if(is<string>(_blockHash)){
               this.blockHash = _blockHash
           } else {
               throw new Error(`Type Error: PubliqBlockLog blockHash is not a string`)
           }

           const _blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
           if(is<number>(_blockNumber)){
               this.blockNumber = _blockNumber
           } else {
               throw new Error(`Type Error: PubliqBlockLog blockNumber is not a number`)
           }

           const _blockSize = data.block_size === undefined ?  data.blockSize: data.block_size;
           if(is<number>(_blockSize)){
               this.blockSize = _blockSize
           } else {
               throw new Error(`Type Error: PubliqBlockLog blockSize is not a number`)
           }

           const _timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
           if(is<Date>(_timeSigned)){
               this.timeSigned = _timeSigned
           } else {
               throw new Error(`Type Error: PubliqBlockLog timeSigned is not a Date`)
           }

           const _rewards = data.rewards.map(d => new PubliqRewardLog(d));
           if(is<Array<PubliqRewardLog>>(_rewards)){
               this.rewards = _rewards
           } else {
               throw new Error(`Type Error: PubliqBlockLog rewards is not a Array<PubliqRewardLog>`)
           }

           const _transactions = data.transactions.map(d => new PubliqTransactionLog(d));
           if(is<Array<PubliqTransactionLog>>(_transactions)){
               this.transactions = _transactions
           } else {
               throw new Error(`Type Error: PubliqBlockLog transactions is not a Array<PubliqTransactionLog>`)
           }

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
        return 11;
    }

} 
