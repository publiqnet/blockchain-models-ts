import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import { PubliqAPIUpdateType } from './PubliqAPIUpdateType';

export default class PubliqAPIAuthorizationUpdate extends BaseModel {

    updateType: PubliqAPIUpdateType;
    owner: string;
    actor: string;
    actionIds: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.updateType = data.update_type === undefined ?  data.updateType: data.update_type;
            this.owner = data.owner;
            this.actor = data.actor;
            this.actionIds = data.action_ids === undefined ?  data.actionIds: data.action_ids;
        }
    }

    static get PropertyMap () {
        return {
            updateType : 'update_type',
            owner : 'owner',
            actor : 'actor',
            actionIds : 'action_ids',
        }
    }

    static get Rtt () {
        return 14;
    }

} 
