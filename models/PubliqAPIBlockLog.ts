import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'

import PubliqAPIRewardLog from './PubliqAPIRewardLog';
import PubliqAPITransactionLog from './PubliqAPITransactionLog';
import PubliqAPIContentUnitImpactLog from './PubliqAPIContentUnitImpactLog';
import PubliqAPISponsorContentUnitApplied from './PubliqAPISponsorContentUnitApplied';

export default class PubliqAPIBlockLog extends BaseModel {

    authority: string;
    blockHash: string;
    blockNumber: number;
    blockSize: number;
    timeSigned: Date;
    rewards: Array<PubliqAPIRewardLog>;
    transactions: Array<PubliqAPITransactionLog>;
    unitUriImpacts: Array<PubliqAPIContentUnitImpactLog>;
    appliedSponsorItems: Array<PubliqAPISponsorContentUnitApplied>;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {
            this.authority = data.authority;
            this.blockHash = data.block_hash === undefined ?  data.blockHash: data.block_hash;
            this.blockNumber = data.block_number === undefined ?  data.blockNumber: data.block_number;
            this.blockSize = data.block_size === undefined ?  data.blockSize: data.block_size;
            this.timeSigned = new Date(data.time_signed === undefined ?  data.timeSigned: data.time_signed);
            this.rewards = data.rewards.map(d => new PubliqAPIRewardLog(d));
            this.transactions = data.transactions.map(d => new PubliqAPITransactionLog(d));
            this.unitUriImpacts = data.unit_uri_impacts === undefined ? data.unitUriImpacts.map(d => new PubliqAPIContentUnitImpactLog(d)) : data.unit_uri_impacts.map(d => new PubliqAPIContentUnitImpactLog(d));
            this.appliedSponsorItems = data.applied_sponsor_items === undefined ? data.appliedSponsorItems.map(d => new PubliqAPISponsorContentUnitApplied(d)) : data.applied_sponsor_items.map(d => new PubliqAPISponsorContentUnitApplied(d));
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
