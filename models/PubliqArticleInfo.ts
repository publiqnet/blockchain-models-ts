import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqArticleInfo extends BaseModel {

    uri: string;
    author: string;
    channel: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.author = data.author;
            this.channel = data.channel;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            author : 'author',
            channel : 'channel',
        }
    }

    static get Rtt () {
        return 16;
    }

} 
