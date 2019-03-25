import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqTransaction from './PubliqTransaction';
import PubliqAuthority from './PubliqAuthority';

export default class PubliqSignedTransaction extends BaseModel {

    transactionDetails: PubliqTransaction;
    authorizations: Array<PubliqAuthority>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.transactionDetails = new PubliqTransaction(data.transaction_details === undefined ?  data.transactionDetails: data.transaction_details);
            this.authorizations = data.authorizations.map(d => new PubliqAuthority(d));
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
