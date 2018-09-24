import BaseModel from '../BaseModel';

import __LoggedTransaction from './__LoggedTransaction';

export default class __LoggedTransactions extends BaseModel {

    actions: Array<__LoggedTransaction>;

    constructor(data) {
        super();
        this.actions = data.actions.map(d => new __LoggedTransaction(d));
    }

    static get PropertyMap () {
        return {
            actions : 'actions',
        }
    }
  static get Rtt () {
    return 21
  }
}
