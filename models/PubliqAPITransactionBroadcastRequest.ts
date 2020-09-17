import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPITransaction from './PubliqAPITransaction';

export default class PubliqAPITransactionBroadcastRequest extends BaseModel {

    transactionDetails: PubliqAPITransaction;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.transactionDetails = new PubliqAPITransaction(data.transaction_details === undefined ?  data.transactionDetails: data.transaction_details);
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
        }
    }

    static get PropertyMap () {
        return {
            transactionDetails : 'transaction_details',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 63;
    }

} 
