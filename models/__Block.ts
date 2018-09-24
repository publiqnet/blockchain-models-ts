import BaseModel from '../BaseModel';

import __BlockHeader from './__BlockHeader';
import __Reward from './__Reward';
import __SignedTransaction from './__SignedTransaction';

export default class __Block extends BaseModel {

    header: __BlockHeader;
    rewards: Array<__Reward>;
    signedTransactions: Array<__SignedTransaction>;

    constructor(data) {
        super();
        this.header = new __BlockHeader(data.header);
        this.rewards = data.rewards.map(d => new __Reward(d));
        this.signedTransactions = data.signed_transactions.map(d => new __SignedTransaction(d));
    }

    static get PropertyMap () {
        return {
            header : 'header',
            rewards : 'rewards',
            signedTransactions : 'signed_transactions',
        }
    }

    static get Rtt () {
      return 1
    }

}
