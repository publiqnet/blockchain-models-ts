import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import __BlockHeader from './__BlockHeader';

export default class __BlockHeaderResponse extends BaseModel {

    blockHeaders: Array<__BlockHeader>;

    constructor(data) { 
        super();
        this.blockHeaders = data.block_headers.map(d => new __BlockHeader(d));
    }

    static get PropertyMap () {
        return {
            blockHeaders : 'block_headers',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
