import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStatItem extends BaseModel {

    node: string;
    passed: number;
    failed: number;

    constructor(data) { 
        super();
        this.node = data.node;
        this.passed = data.passed;
        this.failed = data.failed;
    }

    static get PropertyMap () {
        return {
            node : 'node',
            passed : 'passed',
            failed : 'failed',
        }
    }

    static get Rtt () {
        return 18;
    }

} 
