import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqUpdateType } from './PubliqUpdateType';

export default class PubliqStorageUpdateCommand extends BaseModel {

    status: PubliqUpdateType;
    fileUri: string;
    storageAddress: string;
    channelAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.status = data.status;
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
            this.channelAddress = data.channel_address === undefined ?  data.channelAddress: data.channel_address;
        }
    }

    static get PropertyMap () {
        return {
            status : 'status',
            fileUri : 'file_uri',
            storageAddress : 'storage_address',
            channelAddress : 'channel_address',
        }
    }

    static get Rtt () {
        return 113;
    }

} 
