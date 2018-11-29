import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBoostInfo extends BaseModel {

    author: string;
    channel: string;
    contentHash: string;

    constructor(data) { 
        super();
        this.author = data.author;
        this.channel = data.channel;
        this.contentHash = data.content_hash;
    }

    static get PropertyMap () {
        return {
            author : 'author',
            channel : 'channel',
            contentHash : 'content_hash',
        }
    }

    static get Rtt () {
        return 16;
    }

} 
