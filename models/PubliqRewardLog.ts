import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';
import PubliqRewardType from './PubliqRewardType';

export default class PubliqRewardLog extends BaseModel {

    to: string;
    amount: PubliqCoin;
    rewardType: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _to = data.to;
           if(is<string>(_to)){
               this.to = _to
           } else {
               throw new Error(`Type Error: PubliqRewardLog to is not a string`)
           }

           const _amount = new PubliqCoin(data.amount);
           if(is<PubliqCoin>(_amount)){
               this.amount = _amount
           } else {
               throw new Error(`Type Error: PubliqRewardLog amount is not a PubliqCoin`)
           }

           const _rewardType = PubliqRewardType.toNumber(data.reward_type === undefined ?  data.rewardType: data.reward_type);
           if(is<number>(_rewardType)){
               this.rewardType = _rewardType
           } else {
               throw new Error(`Type Error: PubliqRewardLog rewardType is not a number`)
           }

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
