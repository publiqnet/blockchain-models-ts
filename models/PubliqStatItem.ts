import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStatItem extends BaseModel {

    nodeName: string;
    contentHash: string;
    passCount: number;
    failCount: number;

    constructor(data) { 
        super();
        this.nodeName = data.node_name;
        this.contentHash = data.content_hash;
        this.passCount = data.pass_count;
        this.failCount = data.fail_count;
    }

    static get PropertyMap () {
        return {
            nodeName : 'node_name',
            contentHash : 'content_hash',
            passCount : 'pass_count',
            failCount : 'fail_count',
        }
    }

    static get Rtt () {
        return 18;
    }

} 
