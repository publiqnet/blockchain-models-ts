import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqKeyPairRequest extends BaseModel {

    masterKey: string;
    index: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.masterKey = data.master_key === undefined ?  data.masterKey: data.master_key;
            this.index = data.index;
        }
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
        }
    }

    static get Rtt () {
        return 59;
    }

} 
