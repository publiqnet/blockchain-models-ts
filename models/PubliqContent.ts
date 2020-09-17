import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContent extends BaseModel {

    contentId: number;
    channelAddress: string;
    contentUnitUris: Array<string>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.contentUnitUris = data.content_unit_uris === undefined ?  data.contentUnitUris: data.content_unit_uris;
        }
    }

    static get PropertyMap () {
        return {
            contentId : 'content_id',
            channelAddress : 'channel_address',
            contentUnitUris : 'content_unit_uris',
        }
    }

    static get Rtt () {
        return 31;
    }

} 
