import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqLoggedTransactionsRequest extends BaseModel {

    startIndex: number;
    maxCount: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _startIndex = data.start_index === undefined ?  data.startIndex: data.start_index;
           if(is<number>(_startIndex)){
               this.startIndex = _startIndex
           } else {
               throw new Error(`Type Error: PubliqLoggedTransactionsRequest startIndex is not a number`)
           }

           const _maxCount = data.max_count === undefined ?  data.maxCount: data.max_count;
           if(is<number>(_maxCount)){
               this.maxCount = _maxCount
           } else {
               throw new Error(`Type Error: PubliqLoggedTransactionsRequest maxCount is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            startIndex : 'start_index',
            maxCount : 'max_count',
        }
    }

    static get Rtt () {
        return 39;
    }

} 
