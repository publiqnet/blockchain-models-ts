import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqFile extends BaseModel {

    uri: string;
    authorAddresses: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.authorAddresses = data.author_addresses === undefined ?  data.authorAddresses: data.author_addresses;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            authorAddresses : 'author_addresses',
        }
    }

    static get Rtt () {
        return 19;
    }

} 
