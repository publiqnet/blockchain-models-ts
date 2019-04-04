import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqNotEnoughBalance extends BaseModel {

    balance: PubliqCoin;
    spending: PubliqCoin;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.balance = new PubliqCoin(data.balance);
            this.spending = new PubliqCoin(data.spending);
        }
    }

    static get PropertyMap () {
        return {
            balance : 'balance',
            spending : 'spending',
        }
    }

    static get Rtt () {
        return 82;
    }

} 
