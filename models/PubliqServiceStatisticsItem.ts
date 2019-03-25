import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqServiceStatisticsItem extends BaseModel {

    peerAddress: string;
    count: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.peerAddress = data.peer_address === undefined ?  data.peerAddress: data.peer_address;
            this.count = data.count;
        }
    }

    static get PropertyMap () {
        return {
            peerAddress : 'peer_address',
            count : 'count',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
