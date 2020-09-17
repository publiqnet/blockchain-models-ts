import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPISignedBlock from './PubliqAPISignedBlock';

export default class PubliqAPIBlockchainResponse extends BaseModel {

    signedBlocks: Array<PubliqAPISignedBlock>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.signedBlocks = data.signed_blocks === undefined ? data.signedBlocks.map(d => new PubliqAPISignedBlock(d)) : data.signed_blocks.map(d => new PubliqAPISignedBlock(d));
        }
    }

    static get PropertyMap () {
        return {
            signedBlocks : 'signed_blocks',
        }
    }

    static get Rtt () {
        return 74;
    }

} 
