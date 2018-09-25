import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransfer extends BaseModel {

    from: string;
    to: string;
    amount: PubliqCoin;

    constructor(data) { 
        super();
        this.from = data.from;
        this.to = data.to;
        this.amount = new PubliqCoin(data.amount);
    }

    static get PropertyMap () {
        return {
            from : 'from',
            to : 'to',
            amount : 'amount',
        }
    }

    static get Rtt () {
        return 3;
    }

} 
