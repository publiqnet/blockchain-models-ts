import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignedBlock from './PubliqSignedBlock';

export default class PubliqBlockchainResponse extends BaseModel {

    signedBlocks: Array<PubliqSignedBlock>;

    constructor(data) { 
        super();
        this.signedBlocks = data.signed_blocks.map(d => new PubliqSignedBlock(d));
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
