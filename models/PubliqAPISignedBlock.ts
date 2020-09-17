import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIBlock from './PubliqAPIBlock';
import PubliqAPIAuthority from './PubliqAPIAuthority';

export default class PubliqAPISignedBlock extends BaseModel {

    blockDetails: PubliqAPIBlock;
    authorization: PubliqAPIAuthority;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockDetails = new PubliqAPIBlock(data.block_details === undefined ?  data.blockDetails: data.block_details);
            this.authorization = new PubliqAPIAuthority(data.authorization);
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
