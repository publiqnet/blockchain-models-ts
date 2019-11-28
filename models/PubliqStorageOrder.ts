import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageOrder extends BaseModel {

    storageAddress: string;
    fileUri: string;
    contentUnitUri: string;
    sessionId: string;
    seconds: number;
    timePoint: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.contentUnitUri = data.content_unit_uri === undefined ?  data.contentUnitUri: data.content_unit_uri;
            this.sessionId = data.session_id === undefined ?  data.sessionId: data.session_id;
            this.seconds = data.seconds;
            this.timePoint = new Date(data.time_point === undefined ?  data.timePoint: data.time_point);
        }
    }

    static get PropertyMap () {
        return {
            storageAddress : 'storage_address',
            fileUri : 'file_uri',
            contentUnitUri : 'content_unit_uri',
            sessionId : 'session_id',
            seconds : 'seconds',
            timePoint : 'time_point',
        }
    }

    static get Rtt () {
        return 0;
    }

} 
