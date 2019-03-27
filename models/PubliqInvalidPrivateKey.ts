import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidPrivateKey extends BaseModel {

    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
           if(is<string>(_privateKey)){
               this.privateKey = _privateKey
           } else {
               throw new Error(`Type Error: PubliqInvalidPrivateKey privateKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 72;
    }

} 
