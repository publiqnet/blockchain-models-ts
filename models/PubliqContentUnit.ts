import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnit extends BaseModel {

    uri: string;
    contentId: number;
    authorAddresses: Array<string>;
    channelAddress: string;
    fileUris: Array<string>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.authorAddresses = data.author_addresses === undefined ?  data.authorAddresses: data.author_addresses;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
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
        return 30;
    }

} 
