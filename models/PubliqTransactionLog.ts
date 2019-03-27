import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransactionLog extends BaseModel {

    fee: PubliqCoin;
    action: Object;
    transactionHash: string;
    transactionSize: number;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _fee = new PubliqCoin(data.fee);
           if(is<PubliqCoin>(_fee)){
               this.fee = _fee
           } else {
               throw new Error(`Type Error: PubliqTransactionLog fee is not a PubliqCoin`)
           }

           const _action = createInstanceFromJson(data.action);
           if(is<Object>(_action)){
               this.action = _action
           } else {
               throw new Error(`Type Error: PubliqTransactionLog action is not a Object`)
           }

           const _transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
           if(is<string>(_transactionHash)){
               this.transactionHash = _transactionHash
           } else {
               throw new Error(`Type Error: PubliqTransactionLog transactionHash is not a string`)
           }

           const _transactionSize = data.transaction_size === undefined ?  data.transactionSize: data.transaction_size;
           if(is<number>(_transactionSize)){
               this.transactionSize = _transactionSize
           } else {
               throw new Error(`Type Error: PubliqTransactionLog transactionSize is not a number`)
           }

           const _timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
           if(is<Date>(_timeSigned)){
               this.timeSigned = _timeSigned
           } else {
               throw new Error(`Type Error: PubliqTransactionLog timeSigned is not a Date`)
           }

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
