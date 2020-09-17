import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqAPIUpdateType } from './PubliqAPIUpdateType';

export default class PubliqAPIConfigKeyUpdate extends BaseModel {

    privateKey: string;
    updateType: PubliqAPIUpdateType;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
            this.updateType = data.update_type === undefined ?  data.updateType: data.update_type;
        }
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
            updateType : 'update_type',
        }
    }

    static get Rtt () {
        return 118;
    }

} 
