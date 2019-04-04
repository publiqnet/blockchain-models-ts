import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFileRequest extends BaseModel {

    uri: string;
    channelAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            channelAddress : 'channel_address',
        }
    }

    static get Rtt () {
        return 99;
    }

} 
