import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqIncompleteTransactionItem from './PubliqIncompleteTransactionItem';

export default class PubliqIncompleteTransactions extends BaseModel {

    incompleteSignedTransactions: Array<PubliqIncompleteTransactionItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.incompleteSignedTransactions = data.incomplete_signed_transactions === undefined ? data.incompleteSignedTransactions.map(d => new PubliqIncompleteTransactionItem(d)) : data.incomplete_signed_transactions.map(d => new PubliqIncompleteTransactionItem(d));
        }
    }

    static get PropertyMap () {
        return {
            incompleteSignedTransactions : 'incomplete_signed_transactions',
        }
    }

    static get Rtt () {
        return 56;
    }

} 
