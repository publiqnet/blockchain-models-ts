import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBroadcast extends BaseModel {

    echoes: number;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _echoes = data.echoes;
           if(is<number>(_echoes)){
               this.echoes = _echoes
           } else {
               throw new Error(`Type Error: PubliqBroadcast echoes is not a number`)
           }

           const _package = createInstanceFromJson(data.package);
           if(is<Object>(_package)){
               this.package = _package
           } else {
               throw new Error(`Type Error: PubliqBroadcast package is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            echoes : 'echoes',
            package : 'package',
        }
    }

    static get Rtt () {
        return 1;
    }

} 
