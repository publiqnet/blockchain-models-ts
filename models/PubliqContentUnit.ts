import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnit extends BaseModel {

    uri: string;
    contentId: number;
    authorAddress: string;
    channelAddress: string;
    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.authorAddress = data.author_address === undefined ?  data.authorAddress: data.author_address;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            contentId : 'content_id',
            authorAddress : 'author_address',
            channelAddress : 'channel_address',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 13;
    }

} 
