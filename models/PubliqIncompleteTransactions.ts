import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedTransaction from './PubliqSignedTransaction';

export default class PubliqIncompleteTransactions extends BaseModel {

    incompleteSignedTransactions: Array<PubliqSignedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.incompleteSignedTransactions = data.incomplete_signed_transactions === undefined ? data.incompleteSignedTransactions.map(d => new PubliqSignedTransaction(d)) : data.incomplete_signed_transactions.map(d => new PubliqSignedTransaction(d));
        }
    }

    static get PropertyMap () {
        return {
            incompleteSignedTransactions : 'incomplete_signed_transactions',
        }
    }

    static get Rtt () {
        return 79;
    }

} 
