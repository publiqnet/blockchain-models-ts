import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqNotEnoughBalance extends BaseModel {

    balance: PubliqCoin;
    spending: PubliqCoin;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _balance = new PubliqCoin(data.balance);
           if(is<PubliqCoin>(_balance)){
               this.balance = _balance
           } else {
               throw new Error(`Type Error: PubliqNotEnoughBalance balance is not a PubliqCoin`)
           }

           const _spending = new PubliqCoin(data.spending);
           if(is<PubliqCoin>(_spending)){
               this.spending = _spending
           } else {
               throw new Error(`Type Error: PubliqNotEnoughBalance spending is not a PubliqCoin`)
           }

        }
    }

    static get PropertyMap () {
        return {
            balance : 'balance',
            spending : 'spending',
        }
    }

    static get Rtt () {
        return 75;
    }

} 
