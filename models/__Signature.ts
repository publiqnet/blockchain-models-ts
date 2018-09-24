import BaseModel from '../BaseModel';
import {createInstanceFromJson} from '../ModelTypes'

export default class __Signature extends BaseModel {

    publicKey: string;
    signature: string;
    package: Object;

    constructor(data) {
        super();
        this.publicKey = data.public_key;
        this.signature = data.signature;
        this.package = createInstanceFromJson(data.package);
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
            signature : 'signature',
            package : 'package',
        }
    }

  static get Rtt () {
    return 31
  }
}
