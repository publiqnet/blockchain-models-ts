import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqLoggedTransaction from './PubliqLoggedTransaction';

export default class PubliqLoggedTransactions extends BaseModel {

    actions: Array<PubliqLoggedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.actions = data.actions.map(d => new PubliqLoggedTransaction(d));
        }
    }

    static get PropertyMap () {
        return {
            actions : 'actions',
        }
    }

    static get Rtt () {
        return 44;
    }

} 
