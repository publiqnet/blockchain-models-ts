import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStatItem from './PubliqStatItem';

export default class PubliqStatInfo extends BaseModel {

    hash: string;
    items: Array<PubliqStatItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.hash = data.hash;
            this.items = data.items.map(d => new PubliqStatItem(d));
        }
    }

    static get PropertyMap () {
        return {
            hash : 'hash',
            items : 'items',
        }
    }

    static get Rtt () {
        return 20;
    }

} 
