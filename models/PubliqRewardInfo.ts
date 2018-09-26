import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqRewardInfo extends BaseModel {

    amount: PubliqCoin;
    to: string;
    blockHash: string;

    constructor(data) { 
        super();
        this.amount = new PubliqCoin(data.amount);
        this.to = data.to;
        this.blockHash = data.block_hash;
    }

    static get PropertyMap () {
        return {
            amount : 'amount',
            to : 'to',
            blockHash : 'block_hash',
        }
    }

    static get Rtt () {
        return 37;
    }

} 
