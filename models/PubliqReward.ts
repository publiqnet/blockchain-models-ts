import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';
import PubliqRewardType from './PubliqRewardType';

export default class PubliqReward extends BaseModel {

    to: string;
    amount: PubliqCoin;
    rewardType: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.to = data.to;
            this.amount = new PubliqCoin(data.amount);
            this.rewardType = PubliqRewardType.toNumber(data.reward_type === undefined ?  data.rewardType: data.reward_type);
        }
    }

    static get PropertyMap () {
        return {
            to : 'to',
            amount : 'amount',
            rewardType : 'reward_type',
        }
    }

    static get Rtt () {
        return 10;
    }

} 
