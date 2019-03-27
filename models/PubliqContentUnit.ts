import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnit extends BaseModel {

    uri: string;
    contentId: number;
    authorAddresses: Array<String>;
    channelAddress: string;
    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _uri = data.uri;
           if(is<string>(_uri)){
               this.uri = _uri
           } else {
               throw new Error(`Type Error: PubliqContentUnit uri is not a string`)
           }

           const _contentId = data.content_id === undefined ?  data.contentId: data.content_id;
           if(is<number>(_contentId)){
               this.contentId = _contentId
           } else {
               throw new Error(`Type Error: PubliqContentUnit contentId is not a number`)
           }

           const _authorAddresses = data.author_addresses === undefined ?  data.authorAddresses: data.author_addresses;
           if(is<Array<String>>(_authorAddresses)){
               this.authorAddresses = _authorAddresses
           } else {
               throw new Error(`Type Error: PubliqContentUnit authorAddresses is not a Array<String>`)
           }

           const _channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
           if(is<string>(_channelAddress)){
               this.channelAddress = _channelAddress
           } else {
               throw new Error(`Type Error: PubliqContentUnit channelAddress is not a string`)
           }

           const _fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
           if(is<Array<String>>(_fileUris)){
               this.fileUris = _fileUris
           } else {
               throw new Error(`Type Error: PubliqContentUnit fileUris is not a Array<String>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            contentId : 'content_id',
            authorAddresses : 'author_addresses',
            channelAddress : 'channel_address',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 20;
    }

} 
