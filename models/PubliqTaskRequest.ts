import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTaskRequest extends BaseModel {

    package: Object;
    taskId: number;
    signature: string;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqTaskRequest package is not a Object`)
           }

           const _taskId = data.task_id === undefined ?  data.taskId: data.task_id;
           if(is<number>(_taskId)){
               this.taskId = _taskId
           } else {
               throw new Error(`Type Error: PubliqTaskRequest taskId is not a number`)
           }

           const _signature = data.signature;
           if(is<string>(_signature)){
               this.signature = _signature
           } else {
               throw new Error(`Type Error: PubliqTaskRequest signature is not a string`)
           }

           const _timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
           if(is<Date>(_timeSigned)){
               this.timeSigned = _timeSigned
           } else {
               throw new Error(`Type Error: PubliqTaskRequest timeSigned is not a Date`)
           }

        }
    }

    static get PropertyMap () {
        return {
            package : 'package',
            taskId : 'task_id',
            signature : 'signature',
            timeSigned : 'time_signed',
        }
    }

    static get Rtt () {
        return 107;
    }

} 
