import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqRemoteError extends BaseModel {

    message: string;

    constructor(data) { 
        super();
        this.message = data.message;
    }

    static get PropertyMap () {
        return {
            message : 'message',
        }
    }

    static get Rtt () {
        return 35;
    }

} 
