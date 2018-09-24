import BaseModel from '../BaseModel';
import {createInstanceFromJson} from '../ModelTypes'

import __Coin from './__Coin';

export default class __Transaction extends BaseModel {

    creation: Date;
    expiry: Date;
    fee: __Coin;
    action: Object;

    constructor(data) {
        super();
        this.creation = new Date(data.creation);
        this.expiry = new Date(data.expiry);
        this.fee = new __Coin(data.fee);
        this.action = createInstanceFromJson(data.action);
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
    return 39
  }

}
