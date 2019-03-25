import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatisticsItem from './PubliqServiceStatisticsItem';

export default class PubliqServiceStatistics extends BaseModel {

    serverAddress: string;
    fileUri: string;
    statItems: Array<PubliqServiceStatisticsItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.serverAddress = data.server_address === undefined ?  data.serverAddress: data.server_address;
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.statItems = data.stat_items === undefined ? data.statItems.map(d => new PubliqServiceStatisticsItem(d)) : data.stat_items.map(d => new PubliqServiceStatisticsItem(d));
        }
    }

    static get PropertyMap () {
        return {
            serverAddress : 'server_address',
            fileUri : 'file_uri',
            statItems : 'stat_items',
        }
    }

    static get Rtt () {
        return 25;
    }

} 
