import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqRewardLog from './PubliqRewardLog';
import PubliqTransactionLog from './PubliqTransactionLog';
import PubliqContentUnitImpactLog from './PubliqContentUnitImpactLog';
import PubliqSponsorContentUnitApplied from './PubliqSponsorContentUnitApplied';

export default class PubliqBlockLog extends BaseModel {

    authority: string;
    blockHash: string;
    blockNumber: number;
    blockSize: number;
    timeSigned: Date;
    rewards: Array<PubliqRewardLog>;
    transactions: Array<PubliqTransactionLog>;
    unitUriImpacts: Array<PubliqContentUnitImpactLog>;
    appliedSponsorItems: Array<PubliqSponsorContentUnitApplied>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.authority = data.authority;
            this.blockHash = data.block_hash === undefined ?  data.blockHash: data.block_hash;
            this.blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
            this.blockSize = data.block_size === undefined ?  data.blockSize: data.block_size;
            this.timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
            this.rewards = data.rewards.map(d => new PubliqRewardLog(d));
            this.transactions = data.transactions.map(d => new PubliqTransactionLog(d));
            this.unitUriImpacts = data.unit_uri_impacts === undefined ? data.unitUriImpacts.map(d => new PubliqContentUnitImpactLog(d)) : data.unit_uri_impacts.map(d => new PubliqContentUnitImpactLog(d));
            this.appliedSponsorItems = data.applied_sponsor_items === undefined ? data.appliedSponsorItems.map(d => new PubliqSponsorContentUnitApplied(d)) : data.applied_sponsor_items.map(d => new PubliqSponsorContentUnitApplied(d));
        }
    }

    static get PropertyMap () {
        return {
            authority : 'authority',
            blockHash : 'block_hash',
            blockNumber : 'block_number',
            blockSize : 'block_size',
            timeSigned : 'time_signed',
            rewards : 'rewards',
            transactions : 'transactions',
            unitUriImpacts : 'unit_uri_impacts',
            appliedSponsorItems : 'applied_sponsor_items',
        }
    }

    static get Rtt () {
        return 11;
    }

} 
