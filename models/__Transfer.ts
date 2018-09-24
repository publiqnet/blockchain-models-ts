import BaseModel from '../BaseModel';

import __Coin from './__Coin';

export default class __Transfer extends BaseModel {

    from: string;
    to: string;
    amount: __Coin;

    constructor(data) {
        super();
        this.from = data.from;
        this.to = data.to;
        this.amount = new __Coin(data.amount);
    }

    static get PropertyMap () {
        return {
            from : 'from',
            to : 'to',
            amount : 'amount',
        }
    }

  static get Rtt () {
    return 40
  }
}
