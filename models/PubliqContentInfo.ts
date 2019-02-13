import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqContentInfo extends BaseModel {

    uri: string;
    storage: string;

    constructor(data) { 
        super();
        this.uri = data.uri;
        this.storage = data.storage;
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            storage : 'storage',
        }
    }

    static get Rtt () {
        return 17;
    }

} 
