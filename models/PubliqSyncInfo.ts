import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSyncInfo extends BaseModel {

    number: number;
    cSum: number;
    authority: string;

    constructor(data) { 
        super();
        this.number = data.number;
        this.cSum = data.c_sum;
        this.authority = data.authority;
    }

    static get PropertyMap () {
        return {
            number : 'number',
            cSum : 'c_sum',
            authority : 'authority',
        }
    }

    static get Rtt () {
        return 25;
    }

} 
