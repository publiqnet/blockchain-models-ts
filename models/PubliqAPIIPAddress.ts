import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqAPIIPType } from './PubliqAPIIPType';
import PubliqAPIIPDestination from './PubliqAPIIPDestination';

export default class PubliqAPIIPAddress extends BaseModel {

    ipType: PubliqAPIIPType;
    local: PubliqAPIIPDestination;
    remote: PubliqAPIIPDestination;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ipType = data.ip_type === undefined ?  data.ipType: data.ip_type;
            this.local = new PubliqAPIIPDestination(data.local);
            this.remote = new PubliqAPIIPDestination(data.remote);
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
        return 49;
    }

} 
