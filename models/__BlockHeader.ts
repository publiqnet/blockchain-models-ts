import BaseModel from '../BaseModel';


export default class __BlockHeader extends BaseModel {

    blockNumber: number;
    delta: number;
    cSum: number;
    cConst: number;
    prevHash: string;
    signTime: Date;

    constructor(data) {
        super();
        this.blockNumber = data.block_number;
        this.delta = data.delta;
        this.cSum = data.c_sum;
        this.cConst = data.c_const;
        this.prevHash = data.prev_hash;
        this.signTime = new Date(data.sign_time);
    }

    static get PropertyMap () {
        return {
            blockNumber : 'block_number',
            delta : 'delta',
            cSum : 'c_sum',
            cConst : 'c_const',
            prevHash : 'prev_hash',
            signTime : 'sign_time',
        }
    }

  static get Rtt () {
    return 4
  }

}
