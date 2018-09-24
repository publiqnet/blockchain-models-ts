import BaseModel from '../BaseModel';
import {createInstanceFromJson} from '../ModelTypes'

export default class __SignedBlock extends BaseModel {

    blockDetails: Object;
    authority: string;
    signature: string;

    constructor(data) {
        super();
        this.blockDetails = createInstanceFromJson(data.block_details);
        this.authority = data.authority;
        this.signature = data.signature;
    }

    static get PropertyMap () {
        return {
            blockDetails : 'block_details',
            authority : 'authority',
            signature : 'signature',
        }
    }

  static get Rtt () {
    return 32
  }
}
