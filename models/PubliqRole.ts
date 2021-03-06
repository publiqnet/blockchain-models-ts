import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqNodeType } from './PubliqNodeType';

export default class PubliqRole extends BaseModel {

    nodeAddress: string;
    nodeType: PubliqNodeType;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
            this.nodeType = data.node_type === undefined ?  data.nodeType: data.node_type;
        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            nodeType : 'node_type',
        }
    }

    static get Rtt () {
        return 32;
    }

} 
