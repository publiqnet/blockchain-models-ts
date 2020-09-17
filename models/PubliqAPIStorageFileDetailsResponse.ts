import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIStorageFileDetailsResponse extends BaseModel {

    uri: string;
    mimeType: string;
    size: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.mimeType = data.mime_type === undefined ?  data.mimeType: data.mime_type;
            this.size = data.size;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            mimeType : 'mime_type',
            size : 'size',
        }
    }

    static get Rtt () {
        return 112;
    }

} 
