import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockHeader extends BaseModel {

    blockNumber: number;
    delta: number;
    cSum: number;
    cConst: number;
    prevHash: string;
    timeSigned: Date;

    constructor(data) { 
        super();
        this.blockNumber = data.block_number;
        this.delta = data.delta;
        this.cSum = data.c_sum;
        this.cConst = data.c_const;
        this.prevHash = data.prev_hash;
        this.timeSigned = new Date(data.time_signed);
    }

    static get PropertyMap () {
        return {
            blockNumber : 'block_number',
            delta : 'delta',
            cSum : 'c_sum',
            cConst : 'c_const',
            prevHash : 'prev_hash',
            timeSigned : 'time_signed',
        }
    }

    static get Rtt () {
        return 4;
    }

} 
