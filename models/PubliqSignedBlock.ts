import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlock from './PubliqBlock';
import PubliqAuthority from './PubliqAuthority';

export default class PubliqSignedBlock extends BaseModel {

    blockDetails: PubliqBlock;
    authorization: PubliqAuthority;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _blockDetails = new PubliqBlock(data.block_details === undefined ?  data.blockDetails: data.block_details);
           if(is<PubliqBlock>(_blockDetails)){
               this.blockDetails = _blockDetails
           } else {
               throw new Error(`Type Error: PubliqSignedBlock blockDetails is not a PubliqBlock`)
           }

           const _authorization = new PubliqAuthority(data.authorization);
           if(is<PubliqAuthority>(_authorization)){
               this.authorization = _authorization
           } else {
               throw new Error(`Type Error: PubliqSignedBlock authorization is not a PubliqAuthority`)
           }

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
