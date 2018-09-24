import BaseModel from '../BaseModel';


export default class __InvalidPrivateKey extends BaseModel {

    privateKey: string;

    constructor(data) {
        super();
        this.privateKey = data.private_key;
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
        }
    }
  static get Rtt () {
    return 15
  }
}
