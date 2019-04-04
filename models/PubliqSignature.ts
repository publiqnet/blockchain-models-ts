import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSignature extends BaseModel {

    publicKey: string;
    signature: string;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
            this.signature = data.signature;
            this.package = createInstanceFromJson(data.package);
        }
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
            signature : 'signature',
            package : 'package',
        }
    }

    static get Rtt () {
        return 51;
    }

} 
