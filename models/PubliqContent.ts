import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContent extends BaseModel {

    channel: string;
    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.channel = data.channel;
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
        }
    }

    static get PropertyMap () {
        return {
            channel : 'channel',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 13;
    }

} 
