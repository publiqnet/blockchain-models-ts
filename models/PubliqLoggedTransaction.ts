import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqLoggedTransaction extends BaseModel {

    appliedReverted: boolean;
    index: number;
    action: Object;

    constructor(data) { 
        super();
        this.appliedReverted = data.applied_reverted;
        this.index = data.index;
        this.action = createInstanceFromJson(data.action);
    }

    static get PropertyMap () {
        return {
            appliedReverted : 'applied_reverted',
            index : 'index',
            action : 'action',
        }
    }

    static get Rtt () {
        return 18;
    }

} 
