import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFileSizeResponse extends BaseModel {

    uri: string;
    size: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.size = data.size;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            size : 'size',
        }
    }

    static get Rtt () {
        return 112;
    }

} 
