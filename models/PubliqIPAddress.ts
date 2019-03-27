import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqIPType from './PubliqIPType';
import PubliqIPDestination from './PubliqIPDestination';

export default class PubliqIPAddress extends BaseModel {

    ipType: number;
    local: PubliqIPDestination;
    remote: PubliqIPDestination;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _ipType = PubliqIPType.toNumber(data.ip_type === undefined ?  data.ipType: data.ip_type);
           if(is<number>(_ipType)){
               this.ipType = _ipType
           } else {
               throw new Error(`Type Error: PubliqIPAddress ipType is not a number`)
           }

           const _local = new PubliqIPDestination(data.local);
           if(is<PubliqIPDestination>(_local)){
               this.local = _local
           } else {
               throw new Error(`Type Error: PubliqIPAddress local is not a PubliqIPDestination`)
           }

           const _remote = new PubliqIPDestination(data.remote);
           if(is<PubliqIPDestination>(_remote)){
               this.remote = _remote
           } else {
               throw new Error(`Type Error: PubliqIPAddress remote is not a PubliqIPDestination`)
           }

        }
    }

    static get PropertyMap () {
        return {
            ipType : 'ip_type',
            local : 'local',
            remote : 'remote',
        }
    }

    static get Rtt () {
        return 104;
    }

} 
