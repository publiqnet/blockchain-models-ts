import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentInfo extends BaseModel {

    nodeName: string;
    contentHash: string;

    constructor(data) { 
        super();
        this.nodeName = data.node_name;
        this.contentHash = data.content_hash;
    }

    static get PropertyMap () {
        return {
            nodeName : 'node_name',
            contentHash : 'content_hash',
        }
    }

    static get Rtt () {
        return 17;
    }

} 
