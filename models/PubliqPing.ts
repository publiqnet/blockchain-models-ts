import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPing extends BaseModel {

    address?: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            if (data.address !== undefined) { this.address = data.address;}
        }
    }

    static get PropertyMap () {
        return {
            address : 'address',
        }
    }

    static get Rtt () {
        return 50;
    }

} 
