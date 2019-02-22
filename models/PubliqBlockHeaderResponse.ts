import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeader from './PubliqBlockHeader';

export default class PubliqBlockHeaderResponse extends BaseModel {

    blockHeaders: Array<PubliqBlockHeader>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(d => new PubliqBlockHeader(d)) : data.block_headers.map(d => new PubliqBlockHeader(d));
        }
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 36;
    }

} 
