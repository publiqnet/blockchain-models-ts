import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqLogTransaction extends BaseModel {

    action: Object;

    constructor(data) { 
        super();
        this.action = createInstanceFromJson(data.action);
    }

    static get PropertyMap () {
        return {
            action : 'action',
        }
    }

    static get Rtt () {
        return 36;
    }

} 
