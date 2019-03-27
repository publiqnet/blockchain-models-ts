import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqIncompleteTransactionItem extends BaseModel {

    signedTransaction: PubliqSignedTransaction;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _signedTransaction = new PubliqSignedTransaction(data.signed_transaction === undefined ?  data.signedTransaction: data.signed_transaction);
           if(is<PubliqSignedTransaction>(_signedTransaction)){
               this.signedTransaction = _signedTransaction
           } else {
               throw new Error(`Type Error: PubliqIncompleteTransactionItem signedTransaction is not a PubliqSignedTransaction`)
           }

        }
    }

    static get PropertyMap () {
        return {
            signedTransaction : 'signed_transaction',
        }
    }

    static get Rtt () {
        return 53;
    }

} 
