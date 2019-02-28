import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqFile extends BaseModel {

    uri: string;
    authorAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.authorAddress = data.author_address === undefined ?  data.authorAddress: data.author_address;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            authorAddress : 'author_address',
        }
    }

    static get Rtt () {
        return 12;
    }

} 
