import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqServed extends BaseModel {

    fileUri: string;
    contentUnitUri: string;
    peerAddress: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.fileUri = data.file_uri === undefined ?  data.fileUri: data.file_uri;
            this.contentUnitUri = data.content_unit_uri === undefined ?  data.contentUnitUri: data.content_unit_uri;
            this.peerAddress = data.peer_address === undefined ?  data.peerAddress: data.peer_address;
        }
    }

    static get PropertyMap () {
        return {
            fileUri : 'file_uri',
            contentUnitUri : 'content_unit_uri',
            peerAddress : 'peer_address',
        }
    }

    static get Rtt () {
        return 80;
    }

} 
