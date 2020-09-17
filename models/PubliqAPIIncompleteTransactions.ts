import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPISignedTransaction from './PubliqAPISignedTransaction';

export default class PubliqAPIIncompleteTransactions extends BaseModel {

    incompleteSignedTransactions: Array<PubliqAPISignedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.incompleteSignedTransactions = data.incomplete_signed_transactions === undefined ? data.incompleteSignedTransactions.map(d => new PubliqAPISignedTransaction(d)) : data.incomplete_signed_transactions.map(d => new PubliqAPISignedTransaction(d));
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
