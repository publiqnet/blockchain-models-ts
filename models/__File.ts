import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class __File extends BaseModel {

    author: string;
    uri: string;

    constructor(data) { 
        super();
        this.author = data.author;
        this.uri = data.uri;
    }

    static get PropertyMap () {
        return {
            author : 'author',
            uri : 'uri',
        }
    }

    static get Rtt () {
        return 4;
    }

} 
