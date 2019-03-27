import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqLoggingType from './PubliqLoggingType';

export default class PubliqLoggedTransaction extends BaseModel {

    loggingType: number;
    index: number;
    action: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _loggingType = PubliqLoggingType.toNumber(data.logging_type === undefined ?  data.loggingType: data.logging_type);
           if(is<number>(_loggingType)){
               this.loggingType = _loggingType
           } else {
               throw new Error(`Type Error: PubliqLoggedTransaction loggingType is not a number`)
           }

           const _index = data.index;
           if(is<number>(_index)){
               this.index = _index
           } else {
               throw new Error(`Type Error: PubliqLoggedTransaction index is not a number`)
           }

           const _action = createInstanceFromJson(data.action);
           if(is<Object>(_action)){
               this.action = _action
           } else {
               throw new Error(`Type Error: PubliqLoggedTransaction action is not a Object`)
           }

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
        return 41;
    }

} 
