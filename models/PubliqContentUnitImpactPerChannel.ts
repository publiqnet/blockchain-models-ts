import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnitImpactPerChannel extends BaseModel {

    channelAddress: string;
    viewCount: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
            this.viewCount = data.view_count === undefined ?  data.viewCount: data.view_count;
        }
    }

    static get PropertyMap () {
        return {
            channelAddress : 'channel_address',
            viewCount : 'view_count',
        }
    }

    static get Rtt () {
        return 82;
    }

} 
