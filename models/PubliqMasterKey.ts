import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqMasterKey extends BaseModel {

    masterKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _masterKey = data.master_key === undefined ?  data.masterKey: data.master_key;
           if(is<string>(_masterKey)){
               this.masterKey = _masterKey
           } else {
               throw new Error(`Type Error: PubliqMasterKey masterKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
        }
    }

    static get Rtt () {
        return 43;
    }

} 
