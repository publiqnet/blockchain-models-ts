import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqUpdateType } from './PubliqUpdateType';

export default class PubliqConfigKeyUpdate extends BaseModel {

    privateKey: string;
    updateType: PubliqUpdateType;

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
