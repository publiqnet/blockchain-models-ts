import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqLoggedTransaction from './PubliqLoggedTransaction';

export default class PubliqLoggedTransactions extends BaseModel {

    actions: Array<PubliqLoggedTransaction>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _actions = data.actions.map(d => new PubliqLoggedTransaction(d));
           if(is<Array<PubliqLoggedTransaction>>(_actions)){
               this.actions = _actions
           } else {
               throw new Error(`Type Error: PubliqLoggedTransactions actions is not a Array<PubliqLoggedTransaction>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            actions : 'actions',
        }
    }

    static get Rtt () {
        return 40;
    }

} 
