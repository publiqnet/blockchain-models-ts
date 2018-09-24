import BaseModel from '../BaseModel';

import __SignedBlock from './__SignedBlock';

export default class __BlockChainResponse extends BaseModel {

    signedBlocks: Array<__SignedBlock>;

    constructor(data) {
        super();
        this.signedBlocks = data.signed_blocks.map(d => new __SignedBlock(d));
    }

    static get PropertyMap () {
        return {
            signedBlocks : 'signed_blocks',
        }
    }

    static get Rtt () {
      return 3
    }
}
