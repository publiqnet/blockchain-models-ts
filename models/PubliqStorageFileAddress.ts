import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFileAddress extends BaseModel {

    uri: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _uri = data.uri;
           if(is<string>(_uri)){
               this.uri = _uri
           } else {
               throw new Error(`Type Error: PubliqStorageFileAddress uri is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
        }
    }

    static get Rtt () {
        return 91;
    }

} 
