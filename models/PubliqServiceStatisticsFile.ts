import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatisticsCount from './PubliqServiceStatisticsCount';

export default class PubliqServiceStatisticsFile extends BaseModel {

    fileUri: string;
    unitUri: string;
    countItems: Array<PubliqServiceStatisticsCount>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.unitUri = data.unit_uri === undefined ?  data.unitUri: data.unit_uri;
            this.countItems = data.count_items === undefined ? data.countItems.map(d => new PubliqServiceStatisticsCount(d)) : data.count_items.map(d => new PubliqServiceStatisticsCount(d));
        }
    }

    static get PropertyMap () {
        return {
            fileUri : 'file_uri',
            unitUri : 'unit_uri',
            countItems : 'count_items',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
