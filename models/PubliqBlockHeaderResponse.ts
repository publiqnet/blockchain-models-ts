import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeaderExtended from './PubliqBlockHeaderExtended';

export default class PubliqBlockHeaderResponse extends BaseModel {

    blockHeaders: Array<PubliqBlockHeaderExtended>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(d => new PubliqBlockHeaderExtended(d)) : data.block_headers.map(d => new PubliqBlockHeaderExtended(d));
        }
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 61;
    }

} 
