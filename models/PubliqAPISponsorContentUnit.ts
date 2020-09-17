import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPICoin from './PubliqAPICoin';

export default class PubliqAPISponsorContentUnit extends BaseModel {

    sponsorAddress: string;
    uri: string;
    startTimePoint: Date;
    hours: number;
    amount: PubliqAPICoin;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.sponsorAddress = data.sponsor_address === undefined ?  data.sponsorAddress: data.sponsor_address;
            this.uri = data.uri;
            this.startTimePoint = new Date(data.start_time_point === undefined ?  data.startTimePoint: data.start_time_point);
            this.hours = data.hours;
            this.amount = new PubliqAPICoin(data.amount);
        }
    }

    static get PropertyMap () {
        return {
            sponsorAddress : 'sponsor_address',
            uri : 'uri',
            startTimePoint : 'start_time_point',
            hours : 'hours',
            amount : 'amount',
        }
    }

    static get Rtt () {
        return 38;
    }

} 
