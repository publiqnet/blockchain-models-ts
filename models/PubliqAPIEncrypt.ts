import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIEncrypt extends BaseModel {

    plainB64Msg: string;
    publicKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.plainB64Msg = data.plain_b64_msg === undefined ?  data.plainB64Msg: data.plain_b64_msg;
            this.publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
        }
    }

    static get PropertyMap () {
        return {
            plainB64Msg : 'plain_b64_msg',
            publicKey : 'public_key',
        }
    }

    static get Rtt () {
        return 121;
    }

} 
