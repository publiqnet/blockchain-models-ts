import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIDigest extends BaseModel {

    base58Hash: string;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.base58Hash = data.base58_hash === undefined ?  data.base58Hash: data.base58_hash;
            this.package = createInstanceFromJson(data.package);
        }
    }

    static get PropertyMap () {
        return {
            base58Hash : 'base58_hash',
            package : 'package',
        }
    }

    static get Rtt () {
        return 53;
    }

} 
