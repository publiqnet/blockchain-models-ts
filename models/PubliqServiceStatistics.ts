import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatisticsFile from './PubliqServiceStatisticsFile';

export default class PubliqServiceStatistics extends BaseModel {

    blockNumber: number;
    serverAddress: string;
    fileItems: Array<PubliqServiceStatisticsFile>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
            this.serverAddress = data.server_address === undefined ?  data.serverAddress: data.server_address;
            this.fileItems = data.file_items === undefined ? data.fileItems.map(d => new PubliqServiceStatisticsFile(d)) : data.file_items.map(d => new PubliqServiceStatisticsFile(d));
        }
    }

    static get PropertyMap () {
        return {
            blockNumber : 'block_number',
            serverAddress : 'server_address',
            fileItems : 'file_items',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
