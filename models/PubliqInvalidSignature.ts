import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignature from './PubliqSignature';

export default class PubliqInvalidSignature extends BaseModel {

    details: PubliqSignature;

    constructor(data) { 
        super();
        this.details = new PubliqSignature(data.details);
    }

    static get PropertyMap () {
        return {
            details : 'details',
        }
    }

    static get Rtt () {
        return 32;
    }

} 
