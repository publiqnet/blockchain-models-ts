import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqFile extends BaseModel {

    uri: string;
    authorAddresses: Array<String>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _uri = data.uri;
           if(is<string>(_uri)){
               this.uri = _uri
           } else {
               throw new Error(`Type Error: PubliqFile uri is not a string`)
           }

           const _authorAddresses = data.author_addresses === undefined ?  data.authorAddresses: data.author_addresses;
           if(is<Array<String>>(_authorAddresses)){
               this.authorAddresses = _authorAddresses
           } else {
               throw new Error(`Type Error: PubliqFile authorAddresses is not a Array<String>`)
           }

        }
    }

    static get PropertyMap () {
        return {
            uri : 'uri',
            authorAddresses : 'author_addresses',
        }
    }

    static get Rtt () {
        return 19;
    }

} 
