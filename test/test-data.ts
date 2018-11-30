import PubliqCoin from '../models/PubliqCoin';
import PubliqTransaction from '../models/PubliqTransaction';
import PubliqSignedTransaction from '../models/PubliqSignedTransaction';
import PubliqBlockHeader from '../models/PubliqBlockHeader';
import PubliqBlock from '../models/PubliqBlock';

import PubliqReward from '../models/PubliqReward';
import PubliqAddressInfo from '../models/PubliqAddressInfo';
import PubliqBoostInfo from '../models/PubliqBoostInfo';
import PubliqContentInfo from '../models/PubliqContentInfo';
import PubliqStatItem from '../models/PubliqStatItem';
import PubliqStatInfo from '../models/PubliqStatInfo';
import PubliqDigestRequest from '../models/PubliqDigestRequest';
import PubliqDigest from '../models/PubliqDigest';

import PubliqBlockHeaderRequest from '../models/PubliqBlockHeaderRequest';

import PubliqTransactionDone from '../models/PubliqTransactionDone';
import PubliqFileNotFound from '../models/PubliqFileNotFound';
import PubliqRemoteError from '../models/PubliqRemoteError';
import PubliqStorageFile from '../models/PubliqStorageFile';
import PubliqStorageFileAddress from '../models/PubliqStorageFileAddress';

const coin = {
    "rtt": PubliqCoin.Rtt,
    "whole": 101,
    "fraction": 1,
};

const addressInfo = {
    "rtt": PubliqAddressInfo.Rtt,
    "owner": "User",
    "public_address": "public address"
};

const blockHeader = {
    "rtt": PubliqBlockHeader.Rtt,
    "block_number": 1,
    "delta": 0.1,
    "c_sum": 1,
    "c_const": 1,
    "prev_hash": "prev hash",
    "time_signed": +(new Date()),
};
const reward = {
    "rtt": PubliqReward.Rtt,
    "amount": coin,
    "to": "to public key"
};
const transaction = {
    "rtt": PubliqTransaction.Rtt,
    "creation": +(new Date()),
    "expiry": +(new Date()),
    "fee": coin,
    "action": {},
};
const signedTransaction = {
    "rtt": PubliqSignedTransaction.Rtt,
    "transaction_details": transaction,
    "authority": "authority data",
    "signature": "signature data",
};
const block = {
    "rtt": PubliqBlock.Rtt,
    "header": blockHeader,
    "rewards": [reward, reward],
    "signed_transactions": [signedTransaction]
};

export const JSON_DATA = {
    coin: coin,
    addressInfo: addressInfo,
    blockHeader: blockHeader,
    reward: reward,
    transaction: transaction,
    signedTransaction: signedTransaction,
    block: block
};

// const textJson = {
//     "rtt":2,
//     "creation":"2018-10-23 09:28:20",
//     "expiry":"2018-10-23 09:28:20",
//     "fee":{
//         "rtt":0,
//         "whole":0,
//         "fraction":100
//     },
//     "action":{}
// }
//{"rtt":23,"private_key":"5JaR5GUf5vsL1QLJXiLN9W4FgjP14HxUYKqKU5gmLbQPN3LDj8R","package":{"rtt":22,"master_key":"ARMEN","index":0,"public_key":"PBQ76Zv5QceNSLibecnMGEKbKo3dVFV6HRuDSuX59mJewJxHPhLwu","private_key":"5Kfu9216aabe2L942As4mGm91MC5RJKHP9tLWr5MMwcgVcRjFuz"}}
