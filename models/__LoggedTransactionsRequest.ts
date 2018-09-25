import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class __LoggedTransactionsRequest extends BaseModel {

    startIndex: number;

    constructor(data) { 
        super();
        this.startIndex = data.start_index;
    }

    static get PropertyMap () {
        return {
            startIndex : 'start_index',
        }
    }

    static get Rtt () {
        return 14;
    }

} 
