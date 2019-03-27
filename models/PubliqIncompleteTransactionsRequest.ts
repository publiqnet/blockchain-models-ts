import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqIncompleteTransactionsRequest extends BaseModel {

    address: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _address = data.address;
           if(is<string>(_address)){
               this.address = _address
           } else {
               throw new Error(`Type Error: PubliqIncompleteTransactionsRequest address is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            address : 'address',
        }
    }

    static get Rtt () {
        return 51;
    }

} 
