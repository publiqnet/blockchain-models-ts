import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqSignedTransactionBroadcastRequest extends BaseModel {

    signedTransaction: PubliqSignedTransaction;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _signedTransaction = new PubliqSignedTransaction(data.signed_transaction === undefined ?  data.signedTransaction: data.signed_transaction);
           if(is<PubliqSignedTransaction>(_signedTransaction)){
               this.signedTransaction = _signedTransaction
           } else {
               throw new Error(`Type Error: PubliqSignedTransactionBroadcastRequest signedTransaction is not a PubliqSignedTransaction`)
           }

           const _privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
           if(is<string>(_privateKey)){
               this.privateKey = _privateKey
           } else {
               throw new Error(`Type Error: PubliqSignedTransactionBroadcastRequest privateKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            signedTransaction : 'signed_transaction',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 49;
    }

} 
