import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTooLongString extends BaseModel {

    usedString: string;
    maxLength: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.usedString = data.used_string === undefined ?  data.usedString: data.used_string;
            this.maxLength = data.max_length === undefined ?  data.maxLength: data.max_length;
        }
    }

    static get PropertyMap () {
        return {
            usedString : 'used_string',
            maxLength : 'max_length',
        }
    }

    static get Rtt () {
        return 83;
    }

} 
