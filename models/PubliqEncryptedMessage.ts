import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqEncryptedMessage extends BaseModel {

    cipherB64Msg: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.cipherB64Msg = data.cipher_b64_msg === undefined ?  data.cipherB64Msg: data.cipher_b64_msg;
        }
    }

    static get PropertyMap () {
        return {
            cipherB64Msg : 'cipher_b64_msg',
        }
    }

    static get Rtt () {
        return 122;
    }

} 
