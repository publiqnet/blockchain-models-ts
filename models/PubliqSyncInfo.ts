import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSyncInfo extends BaseModel {

    number: number;
    cSum: number;

    constructor(data) { 
        super();
        this.number = data.number;
        this.cSum = data.c_sum;
    }

    static get PropertyMap () {
        return {
            number : 'number',
            cSum : 'c_sum',
        }
    }

    static get Rtt () {
        return 31;
    }

} 
