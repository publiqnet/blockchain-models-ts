"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqCoin_1 = require("./models/PubliqCoin");
var PubliqBroadcast_1 = require("./models/PubliqBroadcast");
var PubliqTransaction_1 = require("./models/PubliqTransaction");
var PubliqSignedTransaction_1 = require("./models/PubliqSignedTransaction");
var PubliqBlockHeader_1 = require("./models/PubliqBlockHeader");
var PubliqBlock_1 = require("./models/PubliqBlock");
var PubliqSignedBlock_1 = require("./models/PubliqSignedBlock");
var PubliqRewardLog_1 = require("./models/PubliqRewardLog");
var PubliqTransactionLog_1 = require("./models/PubliqTransactionLog");
var PubliqBlockLog_1 = require("./models/PubliqBlockLog");
var PubliqReward_1 = require("./models/PubliqReward");
var PubliqTransfer_1 = require("./models/PubliqTransfer");
var PubliqFile_1 = require("./models/PubliqFile");
var PubliqContentUnit_1 = require("./models/PubliqContentUnit");
var PubliqContent_1 = require("./models/PubliqContent");
var PubliqRole_1 = require("./models/PubliqRole");
var PubliqAddressInfo_1 = require("./models/PubliqAddressInfo");
var PubliqContentInfo_1 = require("./models/PubliqContentInfo");
var PubliqStatItem_1 = require("./models/PubliqStatItem");
var PubliqStatInfo_1 = require("./models/PubliqStatInfo");
var PubliqDigestRequest_1 = require("./models/PubliqDigestRequest");
var PubliqDigest_1 = require("./models/PubliqDigest");
var PubliqLoggedTransactionsRequest_1 = require("./models/PubliqLoggedTransactionsRequest");
var PubliqLoggedTransactions_1 = require("./models/PubliqLoggedTransactions");
var PubliqLoggedTransaction_1 = require("./models/PubliqLoggedTransaction");
var PubliqMasterKeyRequest_1 = require("./models/PubliqMasterKeyRequest");
var PubliqMasterKey_1 = require("./models/PubliqMasterKey");
var PubliqKeyPairRequest_1 = require("./models/PubliqKeyPairRequest");
var PubliqKeyPair_1 = require("./models/PubliqKeyPair");
var PubliqSignRequest_1 = require("./models/PubliqSignRequest");
var PubliqSignature_1 = require("./models/PubliqSignature");
var PubliqSyncInfo_1 = require("./models/PubliqSyncInfo");
var PubliqSyncRequest_1 = require("./models/PubliqSyncRequest");
var PubliqSyncResponse_1 = require("./models/PubliqSyncResponse");
var PubliqBlockHeaderRequest_1 = require("./models/PubliqBlockHeaderRequest");
var PubliqBlockHeaderResponse_1 = require("./models/PubliqBlockHeaderResponse");
var PubliqBlockchainRequest_1 = require("./models/PubliqBlockchainRequest");
var PubliqBlockchainResponse_1 = require("./models/PubliqBlockchainResponse");
var PubliqSyncRequest2_1 = require("./models/PubliqSyncRequest2");
var PubliqSyncResponse2_1 = require("./models/PubliqSyncResponse2");
var PubliqBlockHeaderRequest2_1 = require("./models/PubliqBlockHeaderRequest2");
var PubliqBlockHeaderResponse2_1 = require("./models/PubliqBlockHeaderResponse2");
var PubliqBlockchainRequest2_1 = require("./models/PubliqBlockchainRequest2");
var PubliqBlockchainResponse2_1 = require("./models/PubliqBlockchainResponse2");
var PubliqDone_1 = require("./models/PubliqDone");
var PubliqInvalidPublicKey_1 = require("./models/PubliqInvalidPublicKey");
var PubliqInvalidPrivateKey_1 = require("./models/PubliqInvalidPrivateKey");
var PubliqInvalidSignature_1 = require("./models/PubliqInvalidSignature");
var PubliqInvalidAuthority_1 = require("./models/PubliqInvalidAuthority");
var PubliqNotEnoughBalance_1 = require("./models/PubliqNotEnoughBalance");
var PubliqTooLongString_1 = require("./models/PubliqTooLongString");
var PubliqFileNotFound_1 = require("./models/PubliqFileNotFound");
var PubliqRemoteError_1 = require("./models/PubliqRemoteError");
var PubliqStorageFile_1 = require("./models/PubliqStorageFile");
var PubliqStorageFileAddress_1 = require("./models/PubliqStorageFileAddress");
var PubliqGetStorageFile_1 = require("./models/PubliqGetStorageFile");
var PubliqIPDestination_1 = require("./models/PubliqIPDestination");
var PubliqIPAddress_1 = require("./models/PubliqIPAddress");
var PubliqPing_1 = require("./models/PubliqPing");
var PubliqPong_1 = require("./models/PubliqPong");
var PubliqTaskRequest_1 = require("./models/PubliqTaskRequest");
var PubliqTaskResponse_1 = require("./models/PubliqTaskResponse");
var MODELS_TYPES = [
    PubliqCoin_1.default,
    PubliqBroadcast_1.default,
    PubliqTransaction_1.default,
    PubliqSignedTransaction_1.default,
    PubliqBlockHeader_1.default,
    PubliqBlock_1.default,
    PubliqSignedBlock_1.default,
    PubliqRewardLog_1.default,
    PubliqTransactionLog_1.default,
    PubliqBlockLog_1.default,
    PubliqReward_1.default,
    PubliqTransfer_1.default,
    PubliqFile_1.default,
    PubliqContentUnit_1.default,
    PubliqContent_1.default,
    PubliqRole_1.default,
    PubliqAddressInfo_1.default,
    PubliqContentInfo_1.default,
    PubliqStatItem_1.default,
    PubliqStatInfo_1.default,
    PubliqDigestRequest_1.default,
    PubliqDigest_1.default,
    PubliqLoggedTransactionsRequest_1.default,
    PubliqLoggedTransactions_1.default,
    PubliqLoggedTransaction_1.default,
    PubliqMasterKeyRequest_1.default,
    PubliqMasterKey_1.default,
    PubliqKeyPairRequest_1.default,
    PubliqKeyPair_1.default,
    PubliqSignRequest_1.default,
    PubliqSignature_1.default,
    PubliqSyncInfo_1.default,
    PubliqSyncRequest_1.default,
    PubliqSyncResponse_1.default,
    PubliqBlockHeaderRequest_1.default,
    PubliqBlockHeaderResponse_1.default,
    PubliqBlockchainRequest_1.default,
    PubliqBlockchainResponse_1.default,
    PubliqSyncRequest2_1.default,
    PubliqSyncResponse2_1.default,
    PubliqBlockHeaderRequest2_1.default,
    PubliqBlockHeaderResponse2_1.default,
    PubliqBlockchainRequest2_1.default,
    PubliqBlockchainResponse2_1.default,
    PubliqDone_1.default,
    PubliqInvalidPublicKey_1.default,
    PubliqInvalidPrivateKey_1.default,
    PubliqInvalidSignature_1.default,
    PubliqInvalidAuthority_1.default,
    PubliqNotEnoughBalance_1.default,
    PubliqTooLongString_1.default,
    PubliqFileNotFound_1.default,
    PubliqRemoteError_1.default,
    PubliqStorageFile_1.default,
    PubliqStorageFileAddress_1.default,
    PubliqGetStorageFile_1.default,
    PubliqIPDestination_1.default,
    PubliqIPAddress_1.default,
    PubliqPing_1.default,
    PubliqPong_1.default,
    PubliqTaskRequest_1.default,
    PubliqTaskResponse_1.default,
];
exports.createInstanceFromJson = function (data) {
    if (data.constructor.Rtt !== undefined) {
        return data;
    }
    if (data.rtt !== undefined) {
        var ModelClass = MODELS_TYPES[data.rtt];
        if (!ModelClass) {
            throw new Error("invalid model class");
        }
        return new ModelClass(data);
    }
    return data;
};
exports.default = MODELS_TYPES;
