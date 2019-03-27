import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidPublicKey extends BaseModel {

    publicKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
           if(is<string>(_publicKey)){
               this.publicKey = _publicKey
           } else {
               throw new Error(`Type Error: PubliqInvalidPublicKey publicKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
        }
    }

    static get Rtt () {
        return 71;
    }

} 
