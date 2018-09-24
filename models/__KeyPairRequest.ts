import BaseModel from '../BaseModel';


export default class __KeyPairRequest extends BaseModel {

    masterKey: string;
    index: number;

    constructor(data) {
        super();
        this.masterKey = data.master_key;
        this.index = data.index;
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
        }
    }
  static get Rtt () {
    return 19
  }
}
