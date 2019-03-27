import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedBlock from './PubliqSignedBlock';

export default class PubliqBlockchainResponse extends BaseModel {

    signedBlocks: Array<PubliqSignedBlock>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _signedBlocks = data.signed_blocks === undefined ? data.signedBlocks.map(d => new PubliqSignedBlock(d)) : data.signed_blocks.map(d => new PubliqSignedBlock(d));
           if(is<Array<PubliqSignedBlock>>(_signedBlocks)){
               this.signedBlocks = _signedBlocks
           } else {
               throw new Error(`Type Error: PubliqBlockchainResponse signedBlocks is not a Array<PubliqSignedBlock>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            signedBlocks : 'signed_blocks',
        }
    }

    static get Rtt () {
        return 59;
    }

} 
