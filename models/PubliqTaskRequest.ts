import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTaskRequest extends BaseModel {

    package: Object;
    taskId: number;
    signature: string;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.package = createInstanceFromJson(data.package);
            this.taskId = data.task_id === undefined ?  data.taskId: data.task_id;
            this.signature = data.signature;
            this.timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
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
        return 55;
    }

} 
