import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqFile extends BaseModel {

    authorAddress: string;
    uri: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.authorAddress = data.author_address === undefined ?  data.authorAddress: data.author_address;
            this.uri = data.uri;
        }
    }

    static get PropertyMap () {
        return {
            authorAddress : 'author_address',
            uri : 'uri',
        }
    }

    static get Rtt () {
        return 12;
    }

} 
