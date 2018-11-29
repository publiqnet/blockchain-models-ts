import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqMasterKey extends BaseModel {

    masterKey: string;

    constructor(data) { 
        super();
        this.masterKey = data.master_key;
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
