import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqServiceStatisticsCount extends BaseModel {

    count: number;
    peerAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.count = data.count;
            this.peerAddress = data.peer_address === undefined ?  data.peerAddress: data.peer_address;
        }
    }

    static get PropertyMap () {
        return {
            count : 'count',
            peerAddress : 'peer_address',
        }
    }

    static get Rtt () {
        return 28;
    }

} 
