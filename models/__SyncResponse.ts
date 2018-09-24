import BaseModel from '../BaseModel';


export default class __SyncResponse extends BaseModel {

    blockNumber: number;
    consensusSum: number;

    constructor(data) {
        super();
        this.blockNumber = data.block_number;
        this.consensusSum = data.consensus_sum;
    }

    static get PropertyMap () {
        return {
            blockNumber : 'block_number',
            consensusSum : 'consensus_sum',
        }
    }

  static get Rtt () {
    return 38
  }

}
