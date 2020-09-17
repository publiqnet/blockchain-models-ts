import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIDecrypt extends BaseModel {

    cipherB64Msg: string;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.cipherB64Msg = data.cipher_b64_msg === undefined ?  data.cipherB64Msg: data.cipher_b64_msg;
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
        }
    }

    static get PropertyMap () {
        return {
            cipherB64Msg : 'cipher_b64_msg',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 123;
    }

} 
