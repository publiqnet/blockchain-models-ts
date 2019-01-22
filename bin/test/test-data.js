"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqCoin_1 = require("../models/PubliqCoin");
var PubliqTransaction_1 = require("../models/PubliqTransaction");
var PubliqSignedTransaction_1 = require("../models/PubliqSignedTransaction");
var PubliqBlockHeader_1 = require("../models/PubliqBlockHeader");
var PubliqBlock_1 = require("../models/PubliqBlock");
var PubliqReward_1 = require("../models/PubliqReward");
var PubliqAddressInfo_1 = require("../models/PubliqAddressInfo");
var coin = {
    "rtt": PubliqCoin_1.default.Rtt,
    "whole": 101,
    "fraction": 1,
};
var addressInfo = {
    "rtt": PubliqAddressInfo_1.default.Rtt,
    "owner": "User",
    "public_address": "public address"
};
var blockHeader = {
    "rtt": PubliqBlockHeader_1.default.Rtt,
    "block_number": 1,
    "delta": 0.1,
    "c_sum": 1,
    "c_const": 1,
    "prev_hash": "prev hash",
    "time_signed": +(new Date()),
};
var reward = {
    "rtt": PubliqReward_1.default.Rtt,
    "amount": coin,
    "to": "to public key"
};
var transaction = {
    "rtt": PubliqTransaction_1.default.Rtt,
    "creation": +(new Date()),
    "expiry": +(new Date()),
    "fee": coin,
    "action": {},
};
var signedTransaction = {
    "rtt": PubliqSignedTransaction_1.default.Rtt,
    "transaction_details": transaction,
    "authority": "authority data",
    "signature": "signature data",
};
var block = {
    "rtt": PubliqBlock_1.default.Rtt,
    "header": blockHeader,
    "rewards": [reward, reward],
    "signed_transactions": [signedTransaction]
};
exports.JSON_DATA = {
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
