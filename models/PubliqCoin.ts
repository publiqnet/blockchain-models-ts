import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqCoin extends BaseModel {

    whole: number;
    fraction: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.whole = data.whole;
            this.fraction = data.fraction;
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
