import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFile extends BaseModel {

    mimeType: string;
    data: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _mimeType = data.mime_type === undefined ?  data.mimeType: data.mime_type;
           if(is<string>(_mimeType)){
               this.mimeType = _mimeType
           } else {
               throw new Error(`Type Error: PubliqStorageFile mimeType is not a string`)
           }

           const _data = data.data;
           if(is<string>(_data)){
               this.data = _data
           } else {
               throw new Error(`Type Error: PubliqStorageFile data is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            mimeType : 'mime_type',
            data : 'data',
        }
    }

    static get Rtt () {
        return 89;
    }

} 
