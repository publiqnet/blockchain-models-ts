import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqDigestRequest extends BaseModel {

    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.package = createInstanceFromJson(data.package);
        }
    }

    static get PropertyMap () {
        return {
            package : 'package',
        }
    }

    static get Rtt () {
        return 41;
    }

} 
