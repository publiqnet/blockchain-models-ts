import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockHeader extends BaseModel {

    blockNumber: number;
    delta: number;
    cSum: number;
    cConst: number;
    prevHash: string;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
           if(is<number>(_blockNumber)){
               this.blockNumber = _blockNumber
           } else {
               throw new Error(`Type Error: PubliqBlockHeader blockNumber is not a number`)
           }

           const _delta = data.delta;
           if(is<number>(_delta)){
               this.delta = _delta
           } else {
               throw new Error(`Type Error: PubliqBlockHeader delta is not a number`)
           }

           const _cSum = data.c_sum === undefined ?  data.cSum: data.c_sum;
           if(is<number>(_cSum)){
               this.cSum = _cSum
           } else {
               throw new Error(`Type Error: PubliqBlockHeader cSum is not a number`)
           }

           const _cConst = data.c_const === undefined ?  data.cConst: data.c_const;
           if(is<number>(_cConst)){
               this.cConst = _cConst
           } else {
               throw new Error(`Type Error: PubliqBlockHeader cConst is not a number`)
           }

           const _prevHash = data.prev_hash === undefined ?  data.prevHash: data.prev_hash;
           if(is<string>(_prevHash)){
               this.prevHash = _prevHash
           } else {
               throw new Error(`Type Error: PubliqBlockHeader prevHash is not a string`)
           }

           const _timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
           if(is<Date>(_timeSigned)){
               this.timeSigned = _timeSigned
           } else {
               throw new Error(`Type Error: PubliqBlockHeader timeSigned is not a Date`)
           }

        }
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
        return 5;
    }

} 
