import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTaskResponse extends BaseModel {

    package: Object;
    taskId: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.package = createInstanceFromJson(data.package);
            this.taskId = data.task_id === undefined ?  data.taskId: data.task_id;
        }
    }

    static get PropertyMap () {
        return {
            package : 'package',
            taskId : 'task_id',
        }
    }

    static get Rtt () {
        return 61;
    }

} 
