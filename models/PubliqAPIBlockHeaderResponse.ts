import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIBlockHeaderExtended from './PubliqAPIBlockHeaderExtended';

export default class PubliqAPIBlockHeaderResponse extends BaseModel {

    blockHeaders: Array<PubliqAPIBlockHeaderExtended>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blockHeaders = data.block_headers === undefined ? data.blockHeaders.map(d => new PubliqAPIBlockHeaderExtended(d)) : data.block_headers.map(d => new PubliqAPIBlockHeaderExtended(d));
        }
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 72;
    }

} 
