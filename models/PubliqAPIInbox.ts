import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPILetter from './PubliqAPILetter';

export default class PubliqAPIInbox extends BaseModel {

    items: Array<PubliqAPILetter>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.items = data.items.map(d => new PubliqAPILetter(d));
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
