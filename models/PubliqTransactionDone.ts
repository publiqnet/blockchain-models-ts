import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTransactionDone extends BaseModel {

    transactionHash: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _transactionHash = data.transaction_hash === undefined ?  data.transactionHash: data.transaction_hash;
           if(is<string>(_transactionHash)){
               this.transactionHash = _transactionHash
           } else {
               throw new Error(`Type Error: PubliqTransactionDone transactionHash is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            transactionHash : 'transaction_hash',
        }
    }

    static get Rtt () {
        return 50;
    }

} 
