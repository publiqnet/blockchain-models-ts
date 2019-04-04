import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqUriProblemType from './PubliqUriProblemType';

export default class PubliqUriError extends BaseModel {

    uri: string;
    uriProblemType: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.uri = data.uri;
            this.uriProblemType = PubliqUriProblemType.toNumber(data.uri_problem_type === undefined ?  data.uriProblemType: data.uri_problem_type);
        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            uriProblemType : 'uri_problem_type',
        }
    }

    static get Rtt () {
        return 84;
    }

} 
