import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPITransaction from './PubliqAPITransaction';
import PubliqAPIAuthority from './PubliqAPIAuthority';

export default class PubliqAPISignedTransaction extends BaseModel {

    transactionDetails: PubliqAPITransaction;
    authorizations: Array<PubliqAPIAuthority>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.transactionDetails = new PubliqAPITransaction(data.transaction_details === undefined ?  data.transactionDetails: data.transaction_details);
            this.authorizations = data.authorizations.map(d => new PubliqAPIAuthority(d));
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
