import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSyncInfo from './PubliqSyncInfo';

export default class PubliqSyncResponse2 extends BaseModel {

    number: number;
    cSum: number;
    syncInfo: PubliqSyncInfo;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.number = data.number;
            this.cSum = data.c_sum === undefined ?  data.cSum: data.c_sum;
            this.syncInfo = new PubliqSyncInfo(data.sync_info === undefined ?  data.syncInfo: data.sync_info);
        }
    }

    static get PropertyMap () {
        return {
            number : 'number',
            cSum : 'c_sum',
            syncInfo : 'sync_info',
        }
    }

    static get Rtt () {
        return 39;
    }

} 
