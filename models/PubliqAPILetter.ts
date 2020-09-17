import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPILetter extends BaseModel {

    from: string;
    to: string;
    message: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.from = data.from;
            this.to = data.to;
            this.message = data.message;
        }
    }

    static get PropertyMap () {
        return {
            from : 'from',
            to : 'to',
            message : 'message',
        }
    }

    static get Rtt () {
        return 114;
    }

} 
