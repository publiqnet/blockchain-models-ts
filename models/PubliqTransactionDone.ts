import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTransactionDone extends BaseModel {

    txHash: string;

    constructor(data) { 
        super();
        this.txHash = data.tx_hash;
    }

    static get PropertyMap () {
        return {
            txHash : 'tx_hash',
        }
    }

    static get Rtt () {
        return 45;
    }

} 
