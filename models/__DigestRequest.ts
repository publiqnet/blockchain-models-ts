import BaseModel from '../BaseModel';
import {createInstanceFromJson} from '../ModelTypes'

export default class __DigestRequest extends BaseModel {

    package: Object;

    constructor(data) {
        super();
        this.package = createInstanceFromJson(data.package);
    }

    static get PropertyMap () {
        return {
            package : 'package',
        }
    }

  static get Rtt () {
    return 10
  }

}
