import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeaderExtended from './PubliqBlockHeaderExtended';

export default class PubliqBlockHeaderResponse extends BaseModel {

    blockHeaders: Array<PubliqBlockHeaderExtended>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(d => new PubliqBlockHeaderExtended(d)) : data.block_headers.map(d => new PubliqBlockHeaderExtended(d));
           if(is<Array<PubliqBlockHeaderExtended>>(_blockHeaders)){
               this.blockHeaders = _blockHeaders
           } else {
               throw new Error(`Type Error: PubliqBlockHeaderResponse blockHeaders is not a Array<PubliqBlockHeaderExtended>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 57;
    }

} 
