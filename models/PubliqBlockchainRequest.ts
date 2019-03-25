import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockchainRequest extends BaseModel {

    blocksFrom: number;
    blocksTo: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.blocksFrom = data.blocks_from === undefined ?  data.blocksFrom: data.blocks_from;
            this.blocksTo = data.blocks_to === undefined ?  data.blocksTo: data.blocks_to;
        }
    }

    static get PropertyMap () {
        return {
            blocksFrom : 'blocks_from',
            blocksTo : 'blocks_to',
        }
    }

    static get Rtt () {
        return 58;
    }

} 
