import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqCoin from './PubliqCoin';

export default class PubliqTransaction extends BaseModel {

    creation: Date;
    expiry: Date;
    fee: PubliqCoin;
    action: Object;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _creation = new Date(data.creation);
           if(is<Date>(_creation)){
               this.creation = _creation
           } else {
               throw new Error(`Type Error: PubliqTransaction creation is not a Date`)
           }

           const _expiry = new Date(data.expiry);
           if(is<Date>(_expiry)){
               this.expiry = _expiry
           } else {
               throw new Error(`Type Error: PubliqTransaction expiry is not a Date`)
           }

           const _fee = new PubliqCoin(data.fee);
           if(is<PubliqCoin>(_fee)){
               this.fee = _fee
           } else {
               throw new Error(`Type Error: PubliqTransaction fee is not a PubliqCoin`)
           }

           const _action = createInstanceFromJson(data.action);
           if(is<Object>(_action)){
               this.action = _action
           } else {
               throw new Error(`Type Error: PubliqTransaction action is not a Object`)
           }

        }
    }

    static get PropertyMap () {
        return {
            creation : 'creation',
            expiry : 'expiry',
            fee : 'fee',
            action : 'action',
        }
    }

    static get Rtt () {
        return 2;
    }

} 
