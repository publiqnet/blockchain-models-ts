import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqCoin extends BaseModel {

    whole: number;
    fraction: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _whole = data.whole;
           if(is<number>(_whole)){
               this.whole = _whole
           } else {
               throw new Error(`Type Error: PubliqCoin whole is not a number`)
           }

           const _fraction = data.fraction;
           if(is<number>(_fraction)){
               this.fraction = _fraction
           } else {
               throw new Error(`Type Error: PubliqCoin fraction is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            whole : 'whole',
            fraction : 'fraction',
        }
    }

    static get Rtt () {
        return 0;
    }

} 
