import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqTransaction from './PubliqTransaction';

export default class PubliqSignedTransaction extends BaseModel {

    transactionDetails: PubliqTransaction;
    authority: string;
    signature: string;

    constructor(data) { 
        super();
        this.transactionDetails = new PubliqTransaction(data.transaction_details);
        this.authority = data.authority;
        this.signature = data.signature;
    }

    static get PropertyMap () {
        return {
            transactionDetails : 'transaction_details',
            authority : 'authority',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 7;
    }

} 
