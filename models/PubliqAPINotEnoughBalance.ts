import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPINotEnoughBalance extends BaseModel {

    balance: PubliqAPICoin;
    spending: PubliqAPICoin;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.balance = new PubliqAPICoin(data.balance);
            this.spending = new PubliqAPICoin(data.spending);
        }
    }

    static get PropertyMap () {
        return {
            balance : 'balance',
            spending : 'spending',
        }
    }

    static get Rtt () {
        return 93;
    }

} 
