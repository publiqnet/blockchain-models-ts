import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqIncompleteTransactionItem from './PubliqIncompleteTransactionItem';

export default class PubliqIncompleteTransactions extends BaseModel {

    incompleteSignedTransactions: Array<PubliqIncompleteTransactionItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _incompleteSignedTransactions = data.incomplete_signed_transactions === undefined ? data.incompleteSignedTransactions.map(d => new PubliqIncompleteTransactionItem(d)) : data.incomplete_signed_transactions.map(d => new PubliqIncompleteTransactionItem(d));
           if(is<Array<PubliqIncompleteTransactionItem>>(_incompleteSignedTransactions)){
               this.incompleteSignedTransactions = _incompleteSignedTransactions
           } else {
               throw new Error(`Type Error: PubliqIncompleteTransactions incompleteSignedTransactions is not a Array<PubliqIncompleteTransactionItem>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            incompleteSignedTransactions : 'incomplete_signed_transactions',
        }
    }

    static get Rtt () {
        return 52;
    }

} 
