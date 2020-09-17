import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPublicKeyRequest extends BaseModel {

    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
        }
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 119;
    }

} 
