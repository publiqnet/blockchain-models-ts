import BaseModel from '../BaseModel';


export default class __RemoteError extends BaseModel {

    message: string;

    constructor(data) {
        super();
        this.message = data.message;
    }

    static get PropertyMap () {
        return {
            message : 'message',
        }
    }
  static get Rtt () {
    return 27
  }
}
