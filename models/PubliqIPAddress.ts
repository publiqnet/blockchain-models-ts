import BaseModel from '../BaseModel';

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
            this.ipType = PubliqIPType.toNumber(data.ip_type === undefined ?  data.ipType: data.ip_type);
            this.local = new PubliqIPDestination(data.local);
            this.remote = new PubliqIPDestination(data.remote);
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
        return 57;
    }

} 
