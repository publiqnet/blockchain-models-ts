import BaseModel from '../BaseModel';


export default class __StorageFileAddress extends BaseModel {

    uri: string;

    constructor(data) {
        super();
        this.uri = data.uri;
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
        }
    }

  static get Rtt () {
    return 36
  }

}
