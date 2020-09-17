import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';
import { PubliqAPIRewardType } from './PubliqAPIRewardType';

export default class PubliqAPIRewardLog extends BaseModel {

    to: string;
    amount: PubliqAPICoin;
    rewardType: PubliqAPIRewardType;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.to = data.to;
            this.amount = new PubliqAPICoin(data.amount);
            this.rewardType = data.reward_type === undefined ?  data.rewardType: data.reward_type;
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
        return 9;
    }

} 
