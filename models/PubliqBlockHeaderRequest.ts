import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqBlockHeaderRequest extends BaseModel {

    blocksFrom: number;
    blocksTo: number;

    constructor(data) { 
        super();
        this.blocksFrom = data.blocks_from;
        this.blocksTo = data.blocks_to;
    }

    static get PropertyMap () {
        return {
            blocksFrom : 'blocks_from',
            blocksTo : 'blocks_to',
        }
    }

    static get Rtt () {
        return 28;
    }

} 
