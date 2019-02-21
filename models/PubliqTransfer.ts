import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransfer extends BaseModel {

    from: string;
    to: string;
    amount: PubliqCoin;
    message: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.from = data.from;
            this.to = data.to;
            this.amount = new PubliqCoin(data.amount);
            this.message = data.message;
        }
    }

    static get PropertyMap () {
        return {
            from : 'from',
            to : 'to',
            amount : 'amount',
            message : 'message',
        }
    }

    static get Rtt () {
        return 11;
    }

} 
