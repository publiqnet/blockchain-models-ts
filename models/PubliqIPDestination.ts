import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqIPDestination extends BaseModel {

    port: number;
    address: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _port = data.port;
           if(is<number>(_port)){
               this.port = _port
           } else {
               throw new Error(`Type Error: PubliqIPDestination port is not a number`)
           }

           const _address = data.address;
           if(is<string>(_address)){
               this.address = _address
           } else {
               throw new Error(`Type Error: PubliqIPDestination address is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            port : 'port',
            address : 'address',
        }
    }

    static get Rtt () {
        return 103;
    }

} 
