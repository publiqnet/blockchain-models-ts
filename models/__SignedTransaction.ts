import BaseModel from '../BaseModel';

import __Transaction from './__Transaction';

export default class __SignedTransaction extends BaseModel {

    transactionDetails: __Transaction;
    authority: string;
    signature: string;

    constructor(data) {
        super();
        this.transactionDetails = new __Transaction(data.transaction_details);
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
    return 33
  }
}
