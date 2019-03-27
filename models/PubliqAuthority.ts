import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAuthority extends BaseModel {

    address: string;
    signature: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _address = data.address;
           if(is<string>(_address)){
               this.address = _address
           } else {
               throw new Error(`Type Error: PubliqAuthority address is not a string`)
           }

           const _signature = data.signature;
           if(is<string>(_signature)){
               this.signature = _signature
           } else {
               throw new Error(`Type Error: PubliqAuthority signature is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            address : 'address',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 3;
    }

} 
