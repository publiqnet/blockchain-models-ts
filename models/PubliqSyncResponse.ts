import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqBlockHeaderExtended from './PubliqBlockHeaderExtended';

export default class PubliqSyncResponse extends BaseModel {

    ownHeader: PubliqBlockHeaderExtended;
    promisedHeader: PubliqBlockHeaderExtended;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.ownHeader = new PubliqBlockHeaderExtended(data.own_header === undefined ?  data.ownHeader: data.own_header);
            this.promisedHeader = new PubliqBlockHeaderExtended(data.promised_header === undefined ?  data.promisedHeader: data.promised_header);
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
