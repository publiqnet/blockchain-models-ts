import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSyncInfo extends BaseModel {

    number: number;
    cSum: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.number = data.number;
            this.cSum = data.c_sum === undefined ?  data.cSum: data.c_sum;
        }
    }

    static get PropertyMap () {
        return {
            number : 'number',
            cSum : 'c_sum',
        }
    }

    static get Rtt () {
        return 32;
    }

} 
