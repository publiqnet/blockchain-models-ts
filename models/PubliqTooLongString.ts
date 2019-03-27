import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqTooLongString extends BaseModel {

    usedString: string;
    maxLength: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _usedString = data.used_string === undefined ?  data.usedString: data.used_string;
           if(is<string>(_usedString)){
               this.usedString = _usedString
           } else {
               throw new Error(`Type Error: PubliqTooLongString usedString is not a string`)
           }

           const _maxLength = data.max_length === undefined ?  data.maxLength: data.max_length;
           if(is<number>(_maxLength)){
               this.maxLength = _maxLength
           } else {
               throw new Error(`Type Error: PubliqTooLongString maxLength is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            usedString : 'used_string',
            maxLength : 'max_length',
        }
    }

    static get Rtt () {
        return 76;
    }

} 
