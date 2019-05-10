import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqUpdateType from './PubliqUpdateType';

export default class PubliqStorageUpdate extends BaseModel {

    status: number;
    fileUri: string;
    storageAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.status = PubliqUpdateType.toNumber(data.status);
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.storageAddress = data.storage_address === undefined ?  data.storageAddress: data.storage_address;
        }
    }

    static get PropertyMap () {
        return {
            status : 'status',
            fileUri : 'file_uri',
            storageAddress : 'storage_address',
        }
    }

    static get Rtt () {
        return 24;
    }

} 
