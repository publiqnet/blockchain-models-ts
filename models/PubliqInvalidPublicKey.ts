import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidPublicKey extends BaseModel {

    publicKey: string;

    constructor(data) { 
        super();
        this.publicKey = data.public_key;
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
        }
    }

    static get Rtt () {
        return 30;
    }

} 
