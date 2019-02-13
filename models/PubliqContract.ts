import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqNodeType from './PubliqNodeType';

export default class PubliqContract extends BaseModel {

    owner: string;
    role: number;

    constructor(data) { 
        super();
        this.owner = data.owner;
        this.role = PubliqNodeType.toNumber(data.role);
    }

    static get PropertyMap () {
        return {
            owner : 'owner',
            role : 'role',
        }
    }

    static get Rtt () {
        return 14;
    }

} 
