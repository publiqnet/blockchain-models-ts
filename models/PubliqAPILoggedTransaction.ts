import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqAPILoggingType } from './PubliqAPILoggingType';

export default class PubliqAPILoggedTransaction extends BaseModel {

    loggingType: PubliqAPILoggingType;
    index: number;
    action: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.loggingType = data.logging_type === undefined ?  data.loggingType: data.logging_type;
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
        return 56;
    }

} 
