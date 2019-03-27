import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeaderExtended from './PubliqBlockHeaderExtended';

export default class PubliqSyncResponse extends BaseModel {

    ownHeader: PubliqBlockHeaderExtended;
    promisedHeader: PubliqBlockHeaderExtended;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _ownHeader = new PubliqBlockHeaderExtended(data.own_header === undefined ?  data.ownHeader: data.own_header);
           if(is<PubliqBlockHeaderExtended>(_ownHeader)){
               this.ownHeader = _ownHeader
           } else {
               throw new Error(`Type Error: PubliqSyncResponse ownHeader is not a PubliqBlockHeaderExtended`)
           }

           const _promisedHeader = new PubliqBlockHeaderExtended(data.promised_header === undefined ?  data.promisedHeader: data.promised_header);
           if(is<PubliqBlockHeaderExtended>(_promisedHeader)){
               this.promisedHeader = _promisedHeader
           } else {
               throw new Error(`Type Error: PubliqSyncResponse promisedHeader is not a PubliqBlockHeaderExtended`)
           }

        }
    }

    static get PropertyMap () {
        return {
            ownHeader : 'own_header',
            promisedHeader : 'promised_header',
        }
    }

    static get Rtt () {
        return 55;
    }

} 
