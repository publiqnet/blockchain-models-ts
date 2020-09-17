import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqAPIUriProblemType } from './PubliqAPIUriProblemType';

export default class PubliqAPIUriError extends BaseModel {

    uri: string;
    uriProblemType: PubliqAPIUriProblemType;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.uriProblemType = data.uri_problem_type === undefined ?  data.uriProblemType: data.uri_problem_type;
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            uriProblemType : 'uri_problem_type',
        }
    }

    static get Rtt () {
        return 95;
    }

} 
