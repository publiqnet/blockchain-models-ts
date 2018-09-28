import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidAuthority extends BaseModel {

    authorityProvided: string;
    authorityRequired: string;

    constructor(data) { 
        super();
        this.authorityProvided = data.authority_provided;
        this.authorityRequired = data.authority_required;
    }

    static get PropertyMap () {
        return {
            authorityProvided : 'authority_provided',
            authorityRequired : 'authority_required',
        }
    }

    static get Rtt () {
        return 33;
    }

} 
