import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqRemoteError extends BaseModel {

    message: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.message = data.message;
        }
    }

    static get PropertyMap () {
        return {
            message : 'message',
        }
    }

    static get Rtt () {
        return 5;
    }

} 
