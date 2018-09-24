import BaseModel from '../BaseModel';


export default class __MasterKey extends BaseModel {

    masterKey: string;

    constructor(data) {
        super();
        this.masterKey = data.master_key;
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
        }
    }
  static get Rtt () {
    return 24
  }
}
