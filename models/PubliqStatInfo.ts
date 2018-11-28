import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStatItem from './PubliqStatItem';

export default class PubliqStatInfo extends BaseModel {

    blockHash: string;
    items: Array<PubliqStatItem>;

    constructor(data) { 
        super();
        this.blockHash = data.block_hash;
        this.items = data.items.map(d => new PubliqStatItem(d));
    }

    static get PropertyMap () {
        return {
            blockHash : 'block_hash',
            items : 'items',
        }
    }

    static get Rtt () {
        return 19;
    }

} 
