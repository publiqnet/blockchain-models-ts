import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqIncompleteTransactionItem extends BaseModel {

    signedTransaction: PubliqSignedTransaction;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.signedTransaction = new PubliqSignedTransaction(data.signed_transaction === undefined ?  data.signedTransaction: data.signed_transaction);
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
