import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqStatItem extends BaseModel {

    nodeAddress: string;
    passed: number;
    failed: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.passed = data.passed;
            this.failed = data.failed;
        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            passed : 'passed',
            failed : 'failed',
        }
    }

    static get Rtt () {
        return 19;
    }

} 
