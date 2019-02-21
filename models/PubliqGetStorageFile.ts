import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqGetStorageFile extends BaseModel {

    uri: string;
    node: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.node = data.node;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            node : 'node',
        }
    }

    static get Rtt () {
        return 49;
    }

} 
