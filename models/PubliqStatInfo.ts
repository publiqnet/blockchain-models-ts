import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqStatItem from './PubliqStatItem';

export default class PubliqStatInfo extends BaseModel {

    reporterAddress: string;
    hash: string;
    items: Array<PubliqStatItem>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.reporterAddress = data.reporter_address === undefined ?  data.reporterAddress: data.reporter_address;
            this.hash = data.hash;
            this.items = data.items.map(d => new PubliqStatItem(d));
        }
    }

    static get PropertyMap () {
        return {
            reporterAddress : 'reporter_address',
            hash : 'hash',
            items : 'items',
        }
    }

    static get Rtt () {
        return 19;
    }

} 
