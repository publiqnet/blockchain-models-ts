import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqTransaction from './PubliqTransaction';
import PubliqAuthority from './PubliqAuthority';

export default class PubliqSignedTransaction extends BaseModel {

    transactionDetails: PubliqTransaction;
    authorizations: Array<PubliqAuthority>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _transactionDetails = new PubliqTransaction(data.transaction_details === undefined ?  data.transactionDetails: data.transaction_details);
           if(is<PubliqTransaction>(_transactionDetails)){
               this.transactionDetails = _transactionDetails
           } else {
               throw new Error(`Type Error: PubliqSignedTransaction transactionDetails is not a PubliqTransaction`)
           }

           const _authorizations = data.authorizations.map(d => new PubliqAuthority(d));
           if(is<Array<PubliqAuthority>>(_authorizations)){
               this.authorizations = _authorizations
           } else {
               throw new Error(`Type Error: PubliqSignedTransaction authorizations is not a Array<PubliqAuthority>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            transactionDetails : 'transaction_details',
            authorizations : 'authorizations',
        }
    }

    static get Rtt () {
        return 4;
    }

} 
