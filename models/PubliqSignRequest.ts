import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSignRequest extends BaseModel {

    privateKey: string;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
           if(is<string>(_privateKey)){
               this.privateKey = _privateKey
           } else {
               throw new Error(`Type Error: PubliqSignRequest privateKey is not a string`)
           }

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqSignRequest package is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
            package : 'package',
        }
    }

    static get Rtt () {
        return 46;
    }

} 
