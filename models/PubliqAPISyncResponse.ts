import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIBlockHeaderExtended from './PubliqAPIBlockHeaderExtended';

export default class PubliqAPISyncResponse extends BaseModel {

    ownHeader: PubliqAPIBlockHeaderExtended;
    promisedHeader: PubliqAPIBlockHeaderExtended;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ownHeader = new PubliqAPIBlockHeaderExtended(data.own_header === undefined ?  data.ownHeader: data.own_header);
            this.promisedHeader = new PubliqAPIBlockHeaderExtended(data.promised_header === undefined ?  data.promisedHeader: data.promised_header);
        }
    }

    static get PropertyMap () {
        return {
            ownHeader : 'own_header',
            promisedHeader : 'promised_header',
        }
    }

    static get Rtt () {
        return 70;
    }

} 
