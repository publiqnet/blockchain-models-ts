import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStorageFileDelete extends BaseModel {

    uri: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
        }
    }

    static get Rtt () {
        return 90;
    }

} 
