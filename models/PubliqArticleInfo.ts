import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqArticleInfo extends BaseModel {

    uri: string;
    authorAddress: string;
    channelAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.authorAddress = data.author_address === undefined ?  data.authorAddress: data.author_address;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            authorAddress : 'author_address',
            channelAddress : 'channel_address',
        }
    }

    static get Rtt () {
        return 16;
    }

} 
