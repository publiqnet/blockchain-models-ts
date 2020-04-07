import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqLetter from './PubliqLetter';

export default class PubliqInbox extends BaseModel {

    items: Array<PubliqLetter>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.items = data.items.map(d => new PubliqLetter(d));
        }
    }

    static get PropertyMap () {
        return {
            items : 'items',
        }
    }

    static get Rtt () {
        return 116;
    }

} 
