import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqServiceStatistics from './PubliqServiceStatistics';

export default class PubliqStatistics_del extends BaseModel {

    data: PubliqServiceStatistics;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.data = new PubliqServiceStatistics(data.data);
        }
    }

    static get PropertyMap () {
        return {
            data : 'data',
        }
    }

    static get Rtt () {
        return 25;
    }

} 
