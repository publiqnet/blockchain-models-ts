"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqCoin_1 = require("./models/PubliqCoin");
var PubliqBroadcast_1 = require("./models/PubliqBroadcast");
var PubliqTransaction_1 = require("./models/PubliqTransaction");
var PubliqSignedTransaction_1 = require("./models/PubliqSignedTransaction");
var PubliqBlockHeader_1 = require("./models/PubliqBlockHeader");
var PubliqBlock_1 = require("./models/PubliqBlock");
var PubliqSignedBlock_1 = require("./models/PubliqSignedBlock");
var PubliqRewardInfo_1 = require("./models/PubliqRewardInfo");
var PubliqTransactionInfo_1 = require("./models/PubliqTransactionInfo");
var PubliqBlockInfo_1 = require("./models/PubliqBlockInfo");
var PubliqReward_1 = require("./models/PubliqReward");
var PubliqTransfer_1 = require("./models/PubliqTransfer");
var PubliqFile_1 = require("./models/PubliqFile");
var PubliqPage_1 = require("./models/PubliqPage");
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
var PubliqBlockChainRequest_1 = require("./models/PubliqBlockChainRequest");
var PubliqBlockChainResponse_1 = require("./models/PubliqBlockChainResponse");
var PubliqDone_1 = require("./models/PubliqDone");
var PubliqInvalidPublicKey_1 = require("./models/PubliqInvalidPublicKey");
var PubliqInvalidPrivateKey_1 = require("./models/PubliqInvalidPrivateKey");
var PubliqInvalidSignature_1 = require("./models/PubliqInvalidSignature");
var PubliqInvalidAuthority_1 = require("./models/PubliqInvalidAuthority");
var PubliqTransactionDone_1 = require("./models/PubliqTransactionDone");
var PubliqFileNotFound_1 = require("./models/PubliqFileNotFound");
var PubliqRemoteError_1 = require("./models/PubliqRemoteError");
var PubliqStorageFile_1 = require("./models/PubliqStorageFile");
var PubliqStorageFileAddress_1 = require("./models/PubliqStorageFileAddress");
var MODELS_TYPES = [
    PubliqCoin_1.default,
    PubliqBroadcast_1.default,
    PubliqTransaction_1.default,
    PubliqSignedTransaction_1.default,
    PubliqBlockHeader_1.default,
    PubliqBlock_1.default,
    PubliqSignedBlock_1.default,
    PubliqRewardInfo_1.default,
    PubliqTransactionInfo_1.default,
    PubliqBlockInfo_1.default,
    PubliqReward_1.default,
    PubliqTransfer_1.default,
    PubliqFile_1.default,
    PubliqPage_1.default,
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
    PubliqBlockChainRequest_1.default,
    PubliqBlockChainResponse_1.default,
    PubliqDone_1.default,
    PubliqInvalidPublicKey_1.default,
    PubliqInvalidPrivateKey_1.default,
    PubliqInvalidSignature_1.default,
    PubliqInvalidAuthority_1.default,
    PubliqTransactionDone_1.default,
    PubliqFileNotFound_1.default,
    PubliqRemoteError_1.default,
    PubliqStorageFile_1.default,
    PubliqStorageFileAddress_1.default,
];
exports.createInstanceFromJson = function (data) {
    if (data.constructor.Rtt !== undefined) {
        return data;
    }
    var ModelClass = MODELS_TYPES[data.rtt];
    if (!ModelClass) {
        throw new Error("invalid model class");
    }
    return new ModelClass(data);
};
exports.default = MODELS_TYPES;
