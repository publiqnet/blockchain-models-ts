import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqUpdateType from './PubliqUpdateType';

export default class PubliqStorageUpdate extends BaseModel {

    status: number;
    uri: string;
    storageAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _status = PubliqUpdateType.toNumber(data.status);
           if(is<number>(_status)){
               this.status = _status
           } else {
               throw new Error(`Type Error: PubliqStorageUpdate status is not a number`)
           }

           const _uri = data.uri;
           if(is<string>(_uri)){
               this.uri = _uri
           } else {
               throw new Error(`Type Error: PubliqStorageUpdate uri is not a string`)
           }

           const _storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
           if(is<string>(_storageAddress)){
               this.storageAddress = _storageAddress
           } else {
               throw new Error(`Type Error: PubliqStorageUpdate storageAddress is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            status : 'status',
            uri : 'uri',
            storageAddress : 'storage_address',
        }
    }

    static get Rtt () {
        return 24;
    }

} 
