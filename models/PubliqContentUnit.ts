import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnit extends BaseModel {

    authorAddress: string;
    channelAddress: string;
    contentId: number;
    uri: string;
    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.authorAddress = data.author_address === undefined ?  data.authorAddress: data.author_address;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.uri = data.uri;
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
        }
    }

    static get PropertyMap () {
        return {
            authorAddress : 'author_address',
            channelAddress : 'channel_address',
            contentId : 'content_id',
            uri : 'uri',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 13;
    }

} 
