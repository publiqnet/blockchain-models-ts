import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContent extends BaseModel {

    channelAddress: string;
    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
        }
    }

    static get PropertyMap () {
        return {
            channelAddress : 'channel_address',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 13;
    }

} 
