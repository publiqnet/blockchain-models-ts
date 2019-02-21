import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlock from './PubliqBlock';

export default class PubliqSignedBlock extends BaseModel {

    blockDetails: PubliqBlock;
    authority: string;
    signature: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockDetails = new PubliqBlock(data.block_details === undefined ?  data.blockDetails: data.block_details);
            this.authority = data.authority;
            this.signature = data.signature;
        }
    }

    static get PropertyMap () {
        return {
            blockDetails : 'block_details',
            authority : 'authority',
            signature : 'signature',
        }
    }

    static get Rtt () {
        return 6;
    }

} 
