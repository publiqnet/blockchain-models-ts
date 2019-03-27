import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContent extends BaseModel {

    contentId: number;
    channelAddress: string;
    contentUnitUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _contentId = data.content_id === undefined ?  data.contentId: data.content_id;
           if(is<number>(_contentId)){
               this.contentId = _contentId
           } else {
               throw new Error(`Type Error: PubliqContent contentId is not a number`)
           }

           const _channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
           if(is<string>(_channelAddress)){
               this.channelAddress = _channelAddress
           } else {
               throw new Error(`Type Error: PubliqContent channelAddress is not a string`)
           }

           const _contentUnitUris = data.content_unit_uris === undefined ?  data.contentUnitUris: data.content_unit_uris;
           if(is<Array<String>>(_contentUnitUris)){
               this.contentUnitUris = _contentUnitUris
           } else {
               throw new Error(`Type Error: PubliqContent contentUnitUris is not a Array<String>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            contentId : 'content_id',
            channelAddress : 'channel_address',
            contentUnitUris : 'content_unit_uris',
        }
    }

    static get Rtt () {
        return 21;
    }

} 
