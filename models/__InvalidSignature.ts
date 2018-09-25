import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import __Signature from './__Signature';

export default class __InvalidSignature extends BaseModel {

    details: __Signature;

    constructor(data) { 
        super();
        this.details = new __Signature(data.details);
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
