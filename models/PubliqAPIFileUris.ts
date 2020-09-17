import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqAPIFileUris extends BaseModel {

    fileUris: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.fileUris = data.file_uris === undefined ?  data.fileUris: data.file_uris;
        }
    }

    static get PropertyMap () {
        return {
            fileUris : 'file_uris',
        }
    }

    static get Rtt () {
        return 85;
    }

} 
