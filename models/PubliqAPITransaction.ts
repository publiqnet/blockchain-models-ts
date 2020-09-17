import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPITransaction extends BaseModel {

    creation: Date;
    expiry: Date;
    fee: PubliqAPICoin;
    action: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.creation = new Date(data.creation);
            this.expiry = new Date(data.expiry);
            this.fee = new PubliqAPICoin(data.fee);
            this.action = createInstanceFromJson(data.action);
        }
    }

    static get PropertyMap () {
        return {
            creation : 'creation',
            expiry : 'expiry',
            fee : 'fee',
            action : 'action',
        }
    }

    static get Rtt () {
        return 2;
    }

} 
