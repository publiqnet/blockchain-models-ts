import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPILoggedTransaction from './PubliqAPILoggedTransaction';

export default class PubliqAPILoggedTransactions extends BaseModel {

    actions: Array<PubliqAPILoggedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.actions = data.actions.map(d => new PubliqAPILoggedTransaction(d));
        }
    }

    static get PropertyMap () {
        return {
            actions : 'actions',
        }
    }

    static get Rtt () {
        return 55;
    }

} 
