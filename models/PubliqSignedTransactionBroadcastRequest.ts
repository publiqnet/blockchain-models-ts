import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqSignedTransactionBroadcastRequest extends BaseModel {

    signedTransaction: PubliqSignedTransaction;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.signedTransaction = new PubliqSignedTransaction(data.signed_transaction === undefined ?  data.signedTransaction: data.signed_transaction);
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
        }
    }

    static get PropertyMap () {
        return {
            signedTransaction : 'signed_transaction',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 53;
    }

} 
