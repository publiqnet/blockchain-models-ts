import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqIPDestination extends BaseModel {

    port: number;
    address: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.port = data.port;
            this.address = data.address;
        }
    }

    static get PropertyMap () {
        return {
            port : 'port',
            address : 'address',
        }
    }

    static get Rtt () {
        return 48;
    }

} 
