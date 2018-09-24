import BaseModel from '../BaseModel';

import __Coin from './__Coin';

export default class __Reward extends BaseModel {

    amount: __Coin;
    to: string;

    constructor(data) {
        super();
        this.amount = new __Coin(data.amount);
        this.to = data.to;
    }

    static get PropertyMap () {
        return {
            amount : 'amount',
            to : 'to',
        }
    }

  static get Rtt () {
    return 29
  }
}
