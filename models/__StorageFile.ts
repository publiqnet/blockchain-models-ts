import BaseModel from '../BaseModel';


export default class __StorageFile extends BaseModel {

    mimeType: string;
    data: string;

    constructor(data) {
        super();
        this.mimeType = data.mime_type;
        this.data = data.data;
    }

    static get PropertyMap () {
        return {
            mimeType : 'mime_type',
            data : 'data',
        }
    }

  static get Rtt () {
    return 35
  }

}
