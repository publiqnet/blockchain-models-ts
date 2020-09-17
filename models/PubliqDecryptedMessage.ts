import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDecryptedMessage extends BaseModel {

    plainB64Msg: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.plainB64Msg = data.plain_b64_msg === undefined ?  data.plainB64Msg: data.plain_b64_msg;
        }
    }

    static get PropertyMap () {
        return {
            plainB64Msg : 'plain_b64_msg',
        }
    }

    static get Rtt () {
        return 124;
    }

} 
