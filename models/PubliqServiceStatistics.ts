import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatisticsFile from './PubliqServiceStatisticsFile';

export default class PubliqServiceStatistics extends BaseModel {

    serverAddress: string;
    startTimePoint: Date;
    endTimePoint: Date;
    fileItems: Array<PubliqServiceStatisticsFile>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.serverAddress = data.server_address === undefined ?  data.serverAddress: data.server_address;
            this.startTimePoint = new Date(data.start_time_point === undefined ?  data.startTimePoint: data.start_time_point);
            this.endTimePoint = new Date(data.end_time_point === undefined ?  data.endTimePoint: data.end_time_point);
            this.fileItems = data.file_items === undefined ? data.fileItems.map(d => new PubliqServiceStatisticsFile(d)) : data.file_items.map(d => new PubliqServiceStatisticsFile(d));
        }
    }

    static get PropertyMap () {
        return {
            serverAddress : 'server_address',
            startTimePoint : 'start_time_point',
            endTimePoint : 'end_time_point',
            fileItems : 'file_items',
        }
    }

    static get Rtt () {
        return 35;
    }

} 
