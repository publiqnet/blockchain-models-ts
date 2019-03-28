import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlock from './PubliqBlock';
import PubliqAuthority from './PubliqAuthority';

export default class PubliqSignedBlock extends BaseModel {

    blockDetails: PubliqBlock;
    authorization: PubliqAuthority;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockDetails = new PubliqBlock(data.block_details === undefined ?  data.blockDetails: data.block_details);
            this.authorization = new PubliqAuthority(data.authorization);
        }
    }

    static get PropertyMap () {
        return {
            blockDetails : 'block_details',
            authorization : 'authorization',
        }
    }

    static get Rtt () {
        return 8;
    }

} 
