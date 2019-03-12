import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqInfoType from './PubliqInfoType';

export default class PubliqContentInfo extends BaseModel {

    status: number;
    contentId: number;
    channelAddress: string;
    storageAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.status = PubliqInfoType.toNumber(data.status);
            this.contentId = data.content_id === undefined ?  data.contentId: data.content_id;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
        }
    }

    static get PropertyMap () {
        return {
            status : 'status',
            contentId : 'content_id',
            channelAddress : 'channel_address',
            storageAddress : 'storage_address',
        }
    }

    static get Rtt () {
        return 17;
    }

} 
