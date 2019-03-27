import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPAddress from './PubliqIPAddress';

export default class PubliqAddressInfo extends BaseModel {

    nodeAddress: string;
    ipAddress: PubliqIPAddress;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _nodeAddress = data.node_address === undefined ?  data.nodeAddress: data.node_address;
           if(is<string>(_nodeAddress)){
               this.nodeAddress = _nodeAddress
           } else {
               throw new Error(`Type Error: PubliqAddressInfo nodeAddress is not a string`)
           }

           const _ipAddress = new PubliqIPAddress(data.ip_address === undefined ?  data.ipAddress: data.ip_address);
           if(is<PubliqIPAddress>(_ipAddress)){
               this.ipAddress = _ipAddress
           } else {
               throw new Error(`Type Error: PubliqAddressInfo ipAddress is not a PubliqIPAddress`)
           }

        }
    }

    static get PropertyMap () {
        return {
            nodeAddress : 'node_address',
            ipAddress : 'ip_address',
        }
    }

    static get Rtt () {
        return 23;
    }

} 
