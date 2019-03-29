import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFile extends BaseModel {

    mimeType: string;
    data: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.mimeType = data.mime_type === undefined ?  data.mimeType: data.mime_type;
            this.data = data.data;
        }
    }

    static get PropertyMap () {
        return {
            mimeType : 'mime_type',
            data : 'data',
        }
    }

    static get Rtt () {
        return 89;
    }

} 
