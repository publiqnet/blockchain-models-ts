import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqSignature from './PubliqSignature';

export default class PubliqInvalidSignature extends BaseModel {

    details: PubliqSignature;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _details = new PubliqSignature(data.details);
           if(is<PubliqSignature>(_details)){
               this.details = _details
           } else {
               throw new Error(`Type Error: PubliqInvalidSignature details is not a PubliqSignature`)
           }

        }
    }

    static get PropertyMap () {
        return {
            details : 'details',
        }
    }

    static get Rtt () {
        return 73;
    }

} 
