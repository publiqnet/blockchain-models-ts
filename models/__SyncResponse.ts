import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class __SyncResponse extends BaseModel {

    number: number;
    cSum: number;
    syncInfo: Object;

    constructor(data) { 
        super();
        this.number = data.number;
        this.cSum = data.c_sum;
        this.syncInfo = createInstanceFromJson(data.sync_info);
    }

    static get PropertyMap () {
        return {
            number : 'number',
            cSum : 'c_sum',
            syncInfo : 'sync_info',
        }
    }

    static get Rtt () {
        return 24;
    }

} 
