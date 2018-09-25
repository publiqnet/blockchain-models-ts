import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqReward extends BaseModel {

    amount: PubliqCoin;
    to: string;

    constructor(data) { 
        super();
        this.amount = new PubliqCoin(data.amount);
        this.to = data.to;
    }

    static get PropertyMap () {
        return {
            amount : 'amount',
            to : 'to',
        }
    }

    static get Rtt () {
        return 2;
    }

} 
