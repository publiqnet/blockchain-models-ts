import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTaskResponse extends BaseModel {

    package: Object;
    taskId: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqTaskResponse package is not a Object`)
           }

           const _taskId = data.task_id === undefined ?  data.taskId: data.task_id;
           if(is<number>(_taskId)){
               this.taskId = _taskId
           } else {
               throw new Error(`Type Error: PubliqTaskResponse taskId is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            package : 'package',
            taskId : 'task_id',
        }
    }

    static get Rtt () {
        return 108;
    }

} 
