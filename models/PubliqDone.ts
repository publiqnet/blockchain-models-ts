import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDone extends BaseModel {


    constructor(data?: any) { 
        super();
        if (data !== undefined) {
        }
    }

    static get PropertyMap () {
        return {
        }
    }

    static get Rtt () {
        return 70;
    }

} 
