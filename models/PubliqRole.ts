import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqNodeType from './PubliqNodeType';

export default class PubliqRole extends BaseModel {

    nodeAddress: string;
    nodeType: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
           if(is<string>(_nodeAddress)){
               this.nodeAddress = _nodeAddress
           } else {
               throw new Error(`Type Error: PubliqRole nodeAddress is not a string`)
           }

           const _nodeType = PubliqNodeType.toNumber(data.node_type === undefined ?  data.nodeType: data.node_type);
           if(is<number>(_nodeType)){
               this.nodeType = _nodeType
           } else {
               throw new Error(`Type Error: PubliqRole nodeType is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            nodeType : 'node_type',
        }
    }

    static get Rtt () {
        return 22;
    }

} 
