import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIContentUnitImpactPerChannel from './PubliqAPIContentUnitImpactPerChannel';

export default class PubliqAPIContentUnitImpactLog extends BaseModel {

    contentUnitUri: string;
    viewsPerChannel: Array<PubliqAPIContentUnitImpactPerChannel>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.contentUnitUri = data.content_unit_uri === undefined ?  data.contentUnitUri: data.content_unit_uri;
            this.viewsPerChannel = data.views_per_channel === undefined ? data.viewsPerChannel.map(d => new PubliqAPIContentUnitImpactPerChannel(d)) : data.views_per_channel.map(d => new PubliqAPIContentUnitImpactPerChannel(d));
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
