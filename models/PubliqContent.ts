import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContent extends BaseModel {

    channelAddress: string;
    contentId: number;
    contentUnitUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.contentUnitUris = data.content_unit_uris === undefined ?  data.contentUnitUris: data.content_unit_uris;
        }
    }

    static get PropertyMap () {
        return {
            channelAddress : 'channel_address',
            contentId : 'content_id',
            contentUnitUris : 'content_unit_uris',
        }
    }

    static get Rtt () {
        return 14;
    }

} 
