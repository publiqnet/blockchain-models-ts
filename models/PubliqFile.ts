import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqFile extends BaseModel {

    author: string;
    uri: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.author = data.author;
            this.uri = data.uri;
        }
    }

    static get PropertyMap () {
        return {
            author : 'author',
            uri : 'uri',
        }
    }

    static get Rtt () {
        return 12;
    }

} 
