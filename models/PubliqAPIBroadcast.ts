import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIBroadcast extends BaseModel {

    echoes: number;
    package: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.echoes = data.echoes;
            this.package = createInstanceFromJson(data.package);
        }
    }

    static get PropertyMap () {
        return {
            echoes : 'echoes',
            package : 'package',
        }
    }

    static get Rtt () {
        return 1;
    }

} 
