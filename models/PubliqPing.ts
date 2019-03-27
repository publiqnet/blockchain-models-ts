import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPing extends BaseModel {


    constructor(data?: any) { 
        super();
        if (data !== undefined) {

        }
    }

    static get PropertyMap () {
        return {
        }
    }

    static get Rtt () {
        return 105;
    }

} 
