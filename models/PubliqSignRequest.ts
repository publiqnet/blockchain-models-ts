import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqSignRequest extends BaseModel {

    privateKey: string;
    package: Object;

    constructor(data) { 
        super();
        this.privateKey = data.private_key;
        this.package = createInstanceFromJson(data.package);
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
            package : 'package',
        }
    }

    static get Rtt () {
        return 29;
    }

} 
