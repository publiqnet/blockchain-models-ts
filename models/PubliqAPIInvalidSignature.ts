import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPISignature from './PubliqAPISignature';

export default class PubliqAPIInvalidSignature extends BaseModel {

    details: PubliqAPISignature;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.details = new PubliqAPISignature(data.details);
        }
    }

    static get PropertyMap () {
        return {
            details : 'details',
        }
    }

    static get Rtt () {
        return 91;
    }

} 
