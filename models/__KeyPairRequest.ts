import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class __KeyPairRequest extends BaseModel {

    masterKey: string;
    index: number;

    constructor(data) { 
        super();
        this.masterKey = data.master_key;
        this.index = data.index;
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
        }
    }

    static get Rtt () {
        return 18;
    }

} 
