import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPITransfer extends BaseModel {

    from: string;
    to: string;
    amount: PubliqAPICoin;
    message: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.from = data.from;
            this.to = data.to;
            this.amount = new PubliqAPICoin(data.amount);
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
        return 13;
    }

} 
