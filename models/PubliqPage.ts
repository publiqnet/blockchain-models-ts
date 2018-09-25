import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPage extends BaseModel {

    channel: string;
    fileUris: Array<String>;

    constructor(data) { 
        super();
        this.channel = data.channel;
        this.fileUris = data.file_uris;
    }

    static get PropertyMap () {
        return {
            channel : 'channel',
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 5;
    }

} 
