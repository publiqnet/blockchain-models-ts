import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class __Coin extends BaseModel {

    whole: number;
    fraction: number;

    constructor(data) { 
        super();
        this.whole = data.whole;
        this.fraction = data.fraction;
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
