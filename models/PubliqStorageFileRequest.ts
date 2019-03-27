import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFileRequest extends BaseModel {

    uri: string;
    channelAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _uri = data.uri;
           if(is<string>(_uri)){
               this.uri = _uri
           } else {
               throw new Error(`Type Error: PubliqStorageFileRequest uri is not a string`)
           }

           const _channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
           if(is<string>(_channelAddress)){
               this.channelAddress = _channelAddress
           } else {
               throw new Error(`Type Error: PubliqStorageFileRequest channelAddress is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            channelAddress : 'channel_address',
        }
    }

    static get Rtt () {
        return 92;
    }

} 
