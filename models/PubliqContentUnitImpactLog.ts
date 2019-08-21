import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentUnitImpactLog extends BaseModel {

    contentUnitUri: string;
    viewCount: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.contentUnitUri = data.content_unit_uri === undefined ?  data.contentUnitUri: data.content_unit_uri;
            this.viewCount = data.view_count === undefined ?  data.viewCount: data.view_count;
        }
    }

    static get PropertyMap () {
        return {
            contentUnitUri : 'content_unit_uri',
            viewCount : 'view_count',
        }
    }

    static get Rtt () {
        return 81;
    }

} 
