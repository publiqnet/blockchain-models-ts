import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqKeyPairRequest extends BaseModel {

    masterKey: string;
    index: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _masterKey = data.master_key === undefined ?  data.masterKey: data.master_key;
           if(is<string>(_masterKey)){
               this.masterKey = _masterKey
           } else {
               throw new Error(`Type Error: PubliqKeyPairRequest masterKey is not a string`)
           }

           const _index = data.index;
           if(is<number>(_index)){
               this.index = _index
           } else {
               throw new Error(`Type Error: PubliqKeyPairRequest index is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
        }
    }

    static get Rtt () {
        return 44;
    }

} 
