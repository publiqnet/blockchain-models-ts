import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedBlock from './PubliqSignedBlock';

export default class PubliqBlockchainResponse extends BaseModel {

    signedBlocks: Array<PubliqSignedBlock>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.signedBlocks = data.signed_blocks === undefined ? data.signedBlocks.map(d => new PubliqSignedBlock(d)) : data.signed_blocks.map(d => new PubliqSignedBlock(d));
        }
    }

    static get PropertyMap () {
        return {
            signedBlocks : 'signed_blocks',
        }
    }

    static get Rtt () {
        return 37;
    }

} 
