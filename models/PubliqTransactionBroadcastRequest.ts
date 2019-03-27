import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqTransaction from './PubliqTransaction';

export default class PubliqTransactionBroadcastRequest extends BaseModel {

    transactionDetails: PubliqTransaction;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _transactionDetails = new PubliqTransaction(data.transaction_details === undefined ?  data.transactionDetails: data.transaction_details);
           if(is<PubliqTransaction>(_transactionDetails)){
               this.transactionDetails = _transactionDetails
           } else {
               throw new Error(`Type Error: PubliqTransactionBroadcastRequest transactionDetails is not a PubliqTransaction`)
           }

           const _privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
           if(is<string>(_privateKey)){
               this.privateKey = _privateKey
           } else {
               throw new Error(`Type Error: PubliqTransactionBroadcastRequest privateKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            transactionDetails : 'transaction_details',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 48;
    }

} 
