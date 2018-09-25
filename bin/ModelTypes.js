"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __Coin_1 = require("./models/__Coin");
var __Broadcast_1 = require("./models/__Broadcast");
var __Reward_1 = require("./models/__Reward");
var __Transfer_1 = require("./models/__Transfer");
var __File_1 = require("./models/__File");
var __Page_1 = require("./models/__Page");
var __Transaction_1 = require("./models/__Transaction");
var __SignedTransaction_1 = require("./models/__SignedTransaction");
var __BlockHeader_1 = require("./models/__BlockHeader");
var __Block_1 = require("./models/__Block");
var __SignedBlock_1 = require("./models/__SignedBlock");
var __DigestRequest_1 = require("./models/__DigestRequest");
var __Digest_1 = require("./models/__Digest");
var __LoggedTransaction_1 = require("./models/__LoggedTransaction");
var __LoggedTransactionsRequest_1 = require("./models/__LoggedTransactionsRequest");
var __LoggedTransactions_1 = require("./models/__LoggedTransactions");
var __MasterKeyRequest_1 = require("./models/__MasterKeyRequest");
var __MasterKey_1 = require("./models/__MasterKey");
var __KeyPairRequest_1 = require("./models/__KeyPairRequest");
var __KeyPair_1 = require("./models/__KeyPair");
var __SignRequest_1 = require("./models/__SignRequest");
var __Signature_1 = require("./models/__Signature");
var __SyncInfo_1 = require("./models/__SyncInfo");
var __SyncRequest_1 = require("./models/__SyncRequest");
var __SyncResponse_1 = require("./models/__SyncResponse");
var __BlockHeaderRequest_1 = require("./models/__BlockHeaderRequest");
var __BlockHeaderResponse_1 = require("./models/__BlockHeaderResponse");
var __BlockChainRequest_1 = require("./models/__BlockChainRequest");
var __BlockChainResponse_1 = require("./models/__BlockChainResponse");
var __Done_1 = require("./models/__Done");
var __InvalidPublicKey_1 = require("./models/__InvalidPublicKey");
var __InvalidPrivateKey_1 = require("./models/__InvalidPrivateKey");
var __InvalidSignature_1 = require("./models/__InvalidSignature");
var __InvalidAuthority_1 = require("./models/__InvalidAuthority");
var __FileNotFound_1 = require("./models/__FileNotFound");
var __RemoteError_1 = require("./models/__RemoteError");
var __LogTransaction_1 = require("./models/__LogTransaction");
var __StorageFile_1 = require("./models/__StorageFile");
var __StorageFileAddress_1 = require("./models/__StorageFileAddress");
var MODELS_TYPES = [
    __Coin_1.default,
    __Broadcast_1.default,
    __Reward_1.default,
    __Transfer_1.default,
    __File_1.default,
    __Page_1.default,
    __Transaction_1.default,
    __SignedTransaction_1.default,
    __BlockHeader_1.default,
    __Block_1.default,
    __SignedBlock_1.default,
    __DigestRequest_1.default,
    __Digest_1.default,
    __LoggedTransaction_1.default,
    __LoggedTransactionsRequest_1.default,
    __LoggedTransactions_1.default,
    __MasterKeyRequest_1.default,
    __MasterKey_1.default,
    __KeyPairRequest_1.default,
    __KeyPair_1.default,
    __SignRequest_1.default,
    __Signature_1.default,
    __SyncInfo_1.default,
    __SyncRequest_1.default,
    __SyncResponse_1.default,
    __BlockHeaderRequest_1.default,
    __BlockHeaderResponse_1.default,
    __BlockChainRequest_1.default,
    __BlockChainResponse_1.default,
    __Done_1.default,
    __InvalidPublicKey_1.default,
    __InvalidPrivateKey_1.default,
    __InvalidSignature_1.default,
    __InvalidAuthority_1.default,
    __FileNotFound_1.default,
    __RemoteError_1.default,
    __LogTransaction_1.default,
    __StorageFile_1.default,
    __StorageFileAddress_1.default,
];
exports.createInstanceFromJson = function (data) {
    var ModelClass = MODELS_TYPES[data.rtt];
    if (!ModelClass) {
        throw new Error("invalid model class");
    }
    return new ModelClass(data);
};
exports.default = MODELS_TYPES;
