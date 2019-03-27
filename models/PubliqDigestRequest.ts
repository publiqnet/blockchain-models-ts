import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDigestRequest extends BaseModel {

    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqDigestRequest package is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            package : 'package',
        }
    }

    static get Rtt () {
        return 37;
    }

} 
