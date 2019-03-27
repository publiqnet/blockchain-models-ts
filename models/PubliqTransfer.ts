import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


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

           const _from = data.from;
           if(is<string>(_from)){
               this.from = _from
           } else {
               throw new Error(`Type Error: PubliqTransfer from is not a string`)
           }

           const _to = data.to;
           if(is<string>(_to)){
               this.to = _to
           } else {
               throw new Error(`Type Error: PubliqTransfer to is not a string`)
           }

           const _amount = new PubliqCoin(data.amount);
           if(is<PubliqCoin>(_amount)){
               this.amount = _amount
           } else {
               throw new Error(`Type Error: PubliqTransfer amount is not a PubliqCoin`)
           }

           const _message = data.message;
           if(is<string>(_message)){
               this.message = _message
           } else {
               throw new Error(`Type Error: PubliqTransfer message is not a string`)
           }

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
