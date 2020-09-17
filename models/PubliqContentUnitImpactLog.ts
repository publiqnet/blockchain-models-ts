import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqContentUnitImpactPerChannel from './PubliqContentUnitImpactPerChannel';

export default class PubliqContentUnitImpactLog extends BaseModel {

    contentUnitUri: string;
    viewsPerChannel: Array<PubliqContentUnitImpactPerChannel>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.contentUnitUri = data.content_unit_uri === undefined ?  data.contentUnitUri: data.content_unit_uri;
            this.viewsPerChannel = data.views_per_channel === undefined ? data.viewsPerChannel.map(d => new PubliqContentUnitImpactPerChannel(d)) : data.views_per_channel.map(d => new PubliqContentUnitImpactPerChannel(d));
        }
    }

    static get PropertyMap () {
        return {
            contentUnitUri : 'content_unit_uri',
            viewsPerChannel : 'views_per_channel',
        }
    }

    static get Rtt () {
        return 81;
    }

} 
