import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqServiceStatisticsItem extends BaseModel {

    peerAddress: string;
    count: number;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _peerAddress = data.peer_address === undefined ?  data.peerAddress: data.peer_address;
           if(is<string>(_peerAddress)){
               this.peerAddress = _peerAddress
           } else {
               throw new Error(`Type Error: PubliqServiceStatisticsItem peerAddress is not a string`)
           }

           const _count = data.count;
           if(is<number>(_count)){
               this.count = _count
           } else {
               throw new Error(`Type Error: PubliqServiceStatisticsItem count is not a number`)
           }

        }
    }

    static get PropertyMap () {
        return {
            peerAddress : 'peer_address',
            count : 'count',
        }
    }

    static get Rtt () {
        return 26;
    }

} 
