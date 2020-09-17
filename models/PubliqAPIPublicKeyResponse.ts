import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIPublicKeyResponse extends BaseModel {

    publicKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
        }
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
        }
    }

    static get Rtt () {
        return 120;
    }

} 
