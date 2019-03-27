import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDigest extends BaseModel {

    base58Hash: string;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _base58Hash = data.base58_hash === undefined ?  data.base58Hash: data.base58_hash;
           if(is<string>(_base58Hash)){
               this.base58Hash = _base58Hash
           } else {
               throw new Error(`Type Error: PubliqDigest base58Hash is not a string`)
           }

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqDigest package is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            base58Hash : 'base58_hash',
            package : 'package',
        }
    }

    static get Rtt () {
        return 38;
    }

} 
