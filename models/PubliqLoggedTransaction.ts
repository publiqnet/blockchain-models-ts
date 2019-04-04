import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqLoggingType from './PubliqLoggingType';

export default class PubliqLoggedTransaction extends BaseModel {

    loggingType: number;
    index: number;
    action: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.loggingType = PubliqLoggingType.toNumber(data.logging_type === undefined ?  data.loggingType: data.logging_type);
            this.index = data.index;
            this.action = createInstanceFromJson(data.action);
        }
    }

    static get PropertyMap () {
        return {
            loggingType : 'logging_type',
            index : 'index',
            action : 'action',
        }
    }

    static get Rtt () {
        return 45;
    }

} 
