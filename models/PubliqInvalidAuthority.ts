import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidAuthority extends BaseModel {

    authorityProvided: string;
    authorityRequired: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _authorityProvided = data.authority_provided === undefined ?  data.authorityProvided: data.authority_provided;
           if(is<string>(_authorityProvided)){
               this.authorityProvided = _authorityProvided
           } else {
               throw new Error(`Type Error: PubliqInvalidAuthority authorityProvided is not a string`)
           }

           const _authorityRequired = data.authority_required === undefined ?  data.authorityRequired: data.authority_required;
           if(is<string>(_authorityRequired)){
               this.authorityRequired = _authorityRequired
           } else {
               throw new Error(`Type Error: PubliqInvalidAuthority authorityRequired is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            authorityProvided : 'authority_provided',
            authorityRequired : 'authority_required',
        }
    }

    static get Rtt () {
        return 74;
    }

} 
