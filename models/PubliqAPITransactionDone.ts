import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPITransactionDone extends BaseModel {

    transactionHash: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
        }
    }

    static get PropertyMap () {
        return {
            transactionHash : 'transaction_hash',
        }
    }

    static get Rtt () {
        return 64;
    }

} 
