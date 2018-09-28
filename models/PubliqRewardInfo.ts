import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqRewardInfo extends BaseModel {

    to: string;
    amount: PubliqCoin;

    constructor(data) { 
        super();
        this.to = data.to;
        this.amount = new PubliqCoin(data.amount);
    }

    static get PropertyMap () {
        return {
            to : 'to',
            amount : 'amount',
        }
    }

    static get Rtt () {
        return 36;
    }

} 
