import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSignature extends BaseModel {

    publicKey: string;
    signature: string;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
           if(is<string>(_publicKey)){
               this.publicKey = _publicKey
           } else {
               throw new Error(`Type Error: PubliqSignature publicKey is not a string`)
           }

           const _signature = data.signature;
           if(is<string>(_signature)){
               this.signature = _signature
           } else {
               throw new Error(`Type Error: PubliqSignature signature is not a string`)
           }

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqSignature package is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
            signature : 'signature',
            package : 'package',
        }
    }

    static get Rtt () {
        return 47;
    }

} 
