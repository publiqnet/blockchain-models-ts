import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransaction extends BaseModel {

    creation: Date;
    expiry: Date;
    fee: PubliqCoin;
    action: Object;

    constructor(data) { 
        super();
        this.creation = new Date(data.creation);
        this.expiry = new Date(data.expiry);
        this.fee = new PubliqCoin(data.fee);
        this.action = createInstanceFromJson(data.action);
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
        return 6;
    }

} 
