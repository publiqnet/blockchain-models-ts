import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDigest extends BaseModel {

    base58Hash: string;
    package: Object;

    constructor(data) { 
        super();
        this.base58Hash = data.base58_hash;
        this.package = createInstanceFromJson(data.package);
    }

    static get PropertyMap () {
        return {
            base58Hash : 'base58_hash',
            package : 'package',
        }
    }

    static get Rtt () {
        return 15;
    }

} 
