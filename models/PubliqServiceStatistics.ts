import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatisticsItem from './PubliqServiceStatisticsItem';

export default class PubliqServiceStatistics extends BaseModel {

    serverAddress: string;
    fileUri: string;
    statItems: Array<PubliqServiceStatisticsItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _serverAddress = data.server_address === undefined ?  data.serverAddress: data.server_address;
           if(is<string>(_serverAddress)){
               this.serverAddress = _serverAddress
           } else {
               throw new Error(`Type Error: PubliqServiceStatistics serverAddress is not a string`)
           }

           const _fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
           if(is<string>(_fileUri)){
               this.fileUri = _fileUri
           } else {
               throw new Error(`Type Error: PubliqServiceStatistics fileUri is not a string`)
           }

           const _statItems = data.stat_items === undefined ? data.statItems.map(d => new PubliqServiceStatisticsItem(d)) : data.stat_items.map(d => new PubliqServiceStatisticsItem(d));
           if(is<Array<PubliqServiceStatisticsItem>>(_statItems)){
               this.statItems = _statItems
           } else {
               throw new Error(`Type Error: PubliqServiceStatistics statItems is not a Array<PubliqServiceStatisticsItem>`)
           }

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
