import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSyncRequest extends BaseModel {


    constructor(data) { 
        super();
    }

    static get PropertyMap () {
        return {
        }
    }

    static get Rtt () {
        return 26;
    }

} 
