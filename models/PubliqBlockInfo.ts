import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockInfo extends BaseModel {

    authority: string;
    blockHash: string;
    signTime: Date;

    constructor(data) { 
        super();
        this.authority = data.authority;
        this.blockHash = data.block_hash;
        this.signTime = new Date(data.sign_time);
    }

    static get PropertyMap () {
        return {
            authority : 'authority',
            blockHash : 'block_hash',
            signTime : 'sign_time',
        }
    }

    static get Rtt () {
        return 36;
    }

} 
