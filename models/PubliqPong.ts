import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPong extends BaseModel {

    nodeAddress: string;
    stamp: Date;
    signature: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
           if(is<string>(_nodeAddress)){
               this.nodeAddress = _nodeAddress
           } else {
               throw new Error(`Type Error: PubliqPong nodeAddress is not a string`)
           }

           const _stamp = new Date(data.stamp);
           if(is<Date>(_stamp)){
               this.stamp = _stamp
           } else {
               throw new Error(`Type Error: PubliqPong stamp is not a Date`)
           }

           const _signature = data.signature;
           if(is<string>(_signature)){
               this.signature = _signature
           } else {
               throw new Error(`Type Error: PubliqPong signature is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            stamp : 'stamp',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 106;
    }

} 
