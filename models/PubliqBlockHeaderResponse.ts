import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeader from './PubliqBlockHeader';

export default class PubliqBlockHeaderResponse extends BaseModel {

    blockHeaders: Array<PubliqBlockHeader>;

    constructor(data) { 
        super();
        this.blockHeaders = data.block_headers.map(d => new PubliqBlockHeader(d));
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 29;
    }

} 
