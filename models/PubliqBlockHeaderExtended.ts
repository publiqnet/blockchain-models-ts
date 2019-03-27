import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockHeaderExtended extends BaseModel {

    blockNumber: number;
    delta: number;
    cSum: number;
    cConst: number;
    prevHash: string;
    blockHash: string;
    timeSigned: Date;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
           if(is<number>(_blockNumber)){
               this.blockNumber = _blockNumber
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended blockNumber is not a number`)
           }

           const _delta = data.delta;
           if(is<number>(_delta)){
               this.delta = _delta
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended delta is not a number`)
           }

           const _cSum = data.c_sum === undefined ?  data.cSum: data.c_sum;
           if(is<number>(_cSum)){
               this.cSum = _cSum
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended cSum is not a number`)
           }

           const _cConst = data.c_const === undefined ?  data.cConst: data.c_const;
           if(is<number>(_cConst)){
               this.cConst = _cConst
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended cConst is not a number`)
           }

           const _prevHash = data.prev_hash === undefined ?  data.prevHash: data.prev_hash;
           if(is<string>(_prevHash)){
               this.prevHash = _prevHash
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended prevHash is not a string`)
           }

           const _blockHash = data.block_hash === undefined ?  data.blockHash: data.block_hash;
           if(is<string>(_blockHash)){
               this.blockHash = _blockHash
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended blockHash is not a string`)
           }

           const _timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
           if(is<Date>(_timeSigned)){
               this.timeSigned = _timeSigned
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderExtended timeSigned is not a Date`)
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
            blockHash : 'block_hash',
            timeSigned : 'time_signed',
        }
    }

    static get Rtt () {
        return 6;
    }

} 
