import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockchainRequest extends BaseModel {

    blocksFrom: number;
    blocksTo: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _blocksFrom = data.blocks_from === undefined ?  data.blocksFrom: data.blocks_from;
           if(is<number>(_blocksFrom)){
               this.blocksFrom = _blocksFrom
           } else {
               throw new Error(`Type Error: PubliqBlockchainRequest blocksFrom is not a number`)
           }

           const _blocksTo = data.blocks_to === undefined ?  data.blocksTo: data.blocks_to;
           if(is<number>(_blocksTo)){
               this.blocksTo = _blocksTo
           } else {
               throw new Error(`Type Error: PubliqBlockchainRequest blocksTo is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            blocksFrom : 'blocks_from',
            blocksTo : 'blocks_to',
        }
    }

    static get Rtt () {
        return 58;
    }

} 
