import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqLoggedTransactionsRequest extends BaseModel {

    startIndex: number;
    maxCount: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.startIndex = data.start_index === undefined ?  data.startIndex: data.start_index;
            this.maxCount = data.max_count === undefined ?  data.maxCount: data.max_count;
        }
    }

    static get PropertyMap () {
        return {
            startIndex : 'start_index',
            maxCount : 'max_count',
        }
    }

    static get Rtt () {
        return 54;
    }

} 
