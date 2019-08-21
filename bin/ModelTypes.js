"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqCoin_1 = require("./models/PubliqCoin");
var PubliqBroadcast_1 = require("./models/PubliqBroadcast");
var PubliqTransaction_1 = require("./models/PubliqTransaction");
var PubliqAuthority_1 = require("./models/PubliqAuthority");
var PubliqSignedTransaction_1 = require("./models/PubliqSignedTransaction");
var PubliqBlockHeader_1 = require("./models/PubliqBlockHeader");
var PubliqBlockHeaderExtended_1 = require("./models/PubliqBlockHeaderExtended");
var PubliqBlock_1 = require("./models/PubliqBlock");
var PubliqSignedBlock_1 = require("./models/PubliqSignedBlock");
var PubliqRewardLog_1 = require("./models/PubliqRewardLog");
var PubliqTransactionLog_1 = require("./models/PubliqTransactionLog");
var PubliqBlockLog_1 = require("./models/PubliqBlockLog");
var PubliqReward_1 = require("./models/PubliqReward");
var PubliqTransfer_1 = require("./models/PubliqTransfer");
var PubliqTransactionReserve1_1 = require("./models/PubliqTransactionReserve1");
var PubliqTransactionReserve2_1 = require("./models/PubliqTransactionReserve2");
var PubliqTransactionReserve3_1 = require("./models/PubliqTransactionReserve3");
var PubliqTransactionReserve4_1 = require("./models/PubliqTransactionReserve4");
var PubliqTransactionReserve5_1 = require("./models/PubliqTransactionReserve5");
var PubliqTransactionReserve6_1 = require("./models/PubliqTransactionReserve6");
var PubliqTransactionReserve7_1 = require("./models/PubliqTransactionReserve7");
var PubliqTransactionReserve8_1 = require("./models/PubliqTransactionReserve8");
var PubliqTransactionReserve9_1 = require("./models/PubliqTransactionReserve9");
var PubliqTransactionReserve10_1 = require("./models/PubliqTransactionReserve10");
var PubliqTransactionReserve11_1 = require("./models/PubliqTransactionReserve11");
var PubliqTransactionReserve12_1 = require("./models/PubliqTransactionReserve12");
var PubliqTransactionReserve13_1 = require("./models/PubliqTransactionReserve13");
var PubliqTransactionReserve14_1 = require("./models/PubliqTransactionReserve14");
var PubliqTransactionReserve15_1 = require("./models/PubliqTransactionReserve15");
var PubliqFile_1 = require("./models/PubliqFile");
var PubliqContentUnit_1 = require("./models/PubliqContentUnit");
var PubliqContent_1 = require("./models/PubliqContent");
var PubliqRole_1 = require("./models/PubliqRole");
var PubliqAddressInfo_1 = require("./models/PubliqAddressInfo");
var PubliqStorageUpdate_1 = require("./models/PubliqStorageUpdate");
var PubliqServiceStatistics_1 = require("./models/PubliqServiceStatistics");
var PubliqServiceStatisticsFile_1 = require("./models/PubliqServiceStatisticsFile");
var PubliqServiceStatisticsCount_1 = require("./models/PubliqServiceStatisticsCount");
var PubliqSponsorContentUnit_1 = require("./models/PubliqSponsorContentUnit");
var PubliqCancelSponsorContentUnit_1 = require("./models/PubliqCancelSponsorContentUnit");
var PubliqTransactionReserve18_1 = require("./models/PubliqTransactionReserve18");
var PubliqTransactionReserve19_1 = require("./models/PubliqTransactionReserve19");
var PubliqTransactionReserve20_1 = require("./models/PubliqTransactionReserve20");
var PubliqTransactionReserve21_1 = require("./models/PubliqTransactionReserve21");
var PubliqTransactionReserve22_1 = require("./models/PubliqTransactionReserve22");
var PubliqTransactionReserve23_1 = require("./models/PubliqTransactionReserve23");
var PubliqTransactionReserve24_1 = require("./models/PubliqTransactionReserve24");
var PubliqTransactionReserve25_1 = require("./models/PubliqTransactionReserve25");
var PubliqIPDestination_1 = require("./models/PubliqIPDestination");
var PubliqIPAddress_1 = require("./models/PubliqIPAddress");
var PubliqPing_1 = require("./models/PubliqPing");
var PubliqPong_1 = require("./models/PubliqPong");
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
var PubliqTransactionBroadcastRequest_1 = require("./models/PubliqTransactionBroadcastRequest");
var PubliqTransactionDone_1 = require("./models/PubliqTransactionDone");
var PubliqApiReserve1_1 = require("./models/PubliqApiReserve1");
var PubliqApiReserve2_1 = require("./models/PubliqApiReserve2");
var PubliqApiReserve3_1 = require("./models/PubliqApiReserve3");
var PubliqApiReserve4_1 = require("./models/PubliqApiReserve4");
var PubliqSyncRequest_1 = require("./models/PubliqSyncRequest");
var PubliqSyncResponse_1 = require("./models/PubliqSyncResponse");
var PubliqBlockHeaderRequest_1 = require("./models/PubliqBlockHeaderRequest");
var PubliqBlockHeaderResponse_1 = require("./models/PubliqBlockHeaderResponse");
var PubliqBlockchainRequest_1 = require("./models/PubliqBlockchainRequest");
var PubliqBlockchainResponse_1 = require("./models/PubliqBlockchainResponse");
var PubliqPublicAddressesRequest_1 = require("./models/PubliqPublicAddressesRequest");
var PubliqPublicAddressesInfo_1 = require("./models/PubliqPublicAddressesInfo");
var PubliqPublicAddressInfo_1 = require("./models/PubliqPublicAddressInfo");
var PubliqIncompleteTransactionsRequest_1 = require("./models/PubliqIncompleteTransactionsRequest");
var PubliqIncompleteTransactions_1 = require("./models/PubliqIncompleteTransactions");
var PubliqServed_1 = require("./models/PubliqServed");
var PubliqContentUnitImpactLog_1 = require("./models/PubliqContentUnitImpactLog");
var PubliqApiReserve6_1 = require("./models/PubliqApiReserve6");
var PubliqApiReserve7_1 = require("./models/PubliqApiReserve7");
var PubliqApiReserve8_1 = require("./models/PubliqApiReserve8");
var PubliqApiReserve9_1 = require("./models/PubliqApiReserve9");
var PubliqApiReserve10_1 = require("./models/PubliqApiReserve10");
var PubliqApiReserve11_1 = require("./models/PubliqApiReserve11");
var PubliqDone_1 = require("./models/PubliqDone");
var PubliqInvalidPublicKey_1 = require("./models/PubliqInvalidPublicKey");
var PubliqInvalidPrivateKey_1 = require("./models/PubliqInvalidPrivateKey");
var PubliqInvalidSignature_1 = require("./models/PubliqInvalidSignature");
var PubliqInvalidAuthority_1 = require("./models/PubliqInvalidAuthority");
var PubliqNotEnoughBalance_1 = require("./models/PubliqNotEnoughBalance");
var PubliqTooLongString_1 = require("./models/PubliqTooLongString");
var PubliqUriError_1 = require("./models/PubliqUriError");
var PubliqResponseCodeReserve1_1 = require("./models/PubliqResponseCodeReserve1");
var PubliqResponseCodeReserve2_1 = require("./models/PubliqResponseCodeReserve2");
var PubliqResponseCodeReserve3_1 = require("./models/PubliqResponseCodeReserve3");
var PubliqResponseCodeReserve4_1 = require("./models/PubliqResponseCodeReserve4");
var PubliqResponseCodeReserve5_1 = require("./models/PubliqResponseCodeReserve5");
var PubliqResponseCodeReserve6_1 = require("./models/PubliqResponseCodeReserve6");
var PubliqResponseCodeReserve7_1 = require("./models/PubliqResponseCodeReserve7");
var PubliqResponseCodeReserve8_1 = require("./models/PubliqResponseCodeReserve8");
var PubliqResponseCodeReserve9_1 = require("./models/PubliqResponseCodeReserve9");
var PubliqResponseCodeReserve10_1 = require("./models/PubliqResponseCodeReserve10");
var PubliqRemoteError_1 = require("./models/PubliqRemoteError");
var PubliqStorageFile_1 = require("./models/PubliqStorageFile");
var PubliqStorageFileDelete_1 = require("./models/PubliqStorageFileDelete");
var PubliqStorageFileAddress_1 = require("./models/PubliqStorageFileAddress");
var PubliqStorageFileRequest_1 = require("./models/PubliqStorageFileRequest");
var PubliqStorageFileDetails_1 = require("./models/PubliqStorageFileDetails");
var PubliqStorageFileDetailsResponse_1 = require("./models/PubliqStorageFileDetailsResponse");
var PubliqGenericModelReserve1_1 = require("./models/PubliqGenericModelReserve1");
var PubliqGenericModelReserve2_1 = require("./models/PubliqGenericModelReserve2");
var PubliqGenericModelReserve3_1 = require("./models/PubliqGenericModelReserve3");
var PubliqGenericModelReserve4_1 = require("./models/PubliqGenericModelReserve4");
var PubliqGenericModelReserve5_1 = require("./models/PubliqGenericModelReserve5");
var PubliqGenericModelReserve6_1 = require("./models/PubliqGenericModelReserve6");
var PubliqGenericModelReserve7_1 = require("./models/PubliqGenericModelReserve7");
var PubliqGenericModelReserve8_1 = require("./models/PubliqGenericModelReserve8");
var PubliqGenericModelReserve9_1 = require("./models/PubliqGenericModelReserve9");
var PubliqGenericModelReserve10_1 = require("./models/PubliqGenericModelReserve10");
var MODELS_TYPES = [
    PubliqCoin_1.default,
    PubliqBroadcast_1.default,
    PubliqTransaction_1.default,
    PubliqAuthority_1.default,
    PubliqSignedTransaction_1.default,
    PubliqBlockHeader_1.default,
    PubliqBlockHeaderExtended_1.default,
    PubliqBlock_1.default,
    PubliqSignedBlock_1.default,
    PubliqRewardLog_1.default,
    PubliqTransactionLog_1.default,
    PubliqBlockLog_1.default,
    PubliqReward_1.default,
    PubliqTransfer_1.default,
    PubliqTransactionReserve1_1.default,
    PubliqTransactionReserve2_1.default,
    PubliqTransactionReserve3_1.default,
    PubliqTransactionReserve4_1.default,
    PubliqTransactionReserve5_1.default,
    PubliqTransactionReserve6_1.default,
    PubliqTransactionReserve7_1.default,
    PubliqTransactionReserve8_1.default,
    PubliqTransactionReserve9_1.default,
    PubliqTransactionReserve10_1.default,
    PubliqTransactionReserve11_1.default,
    PubliqTransactionReserve12_1.default,
    PubliqTransactionReserve13_1.default,
    PubliqTransactionReserve14_1.default,
    PubliqTransactionReserve15_1.default,
    PubliqFile_1.default,
    PubliqContentUnit_1.default,
    PubliqContent_1.default,
    PubliqRole_1.default,
    PubliqAddressInfo_1.default,
    PubliqStorageUpdate_1.default,
    PubliqServiceStatistics_1.default,
    PubliqServiceStatisticsFile_1.default,
    PubliqServiceStatisticsCount_1.default,
    PubliqSponsorContentUnit_1.default,
    PubliqCancelSponsorContentUnit_1.default,
    PubliqTransactionReserve18_1.default,
    PubliqTransactionReserve19_1.default,
    PubliqTransactionReserve20_1.default,
    PubliqTransactionReserve21_1.default,
    PubliqTransactionReserve22_1.default,
    PubliqTransactionReserve23_1.default,
    PubliqTransactionReserve24_1.default,
    PubliqTransactionReserve25_1.default,
    PubliqIPDestination_1.default,
    PubliqIPAddress_1.default,
    PubliqPing_1.default,
    PubliqPong_1.default,
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
    PubliqTransactionBroadcastRequest_1.default,
    PubliqTransactionDone_1.default,
    PubliqApiReserve1_1.default,
    PubliqApiReserve2_1.default,
    PubliqApiReserve3_1.default,
    PubliqApiReserve4_1.default,
    PubliqSyncRequest_1.default,
    PubliqSyncResponse_1.default,
    PubliqBlockHeaderRequest_1.default,
    PubliqBlockHeaderResponse_1.default,
    PubliqBlockchainRequest_1.default,
    PubliqBlockchainResponse_1.default,
    PubliqPublicAddressesRequest_1.default,
    PubliqPublicAddressesInfo_1.default,
    PubliqPublicAddressInfo_1.default,
    PubliqIncompleteTransactionsRequest_1.default,
    PubliqIncompleteTransactions_1.default,
    PubliqServed_1.default,
    PubliqContentUnitImpactLog_1.default,
    PubliqApiReserve6_1.default,
    PubliqApiReserve7_1.default,
    PubliqApiReserve8_1.default,
    PubliqApiReserve9_1.default,
    PubliqApiReserve10_1.default,
    PubliqApiReserve11_1.default,
    PubliqDone_1.default,
    PubliqInvalidPublicKey_1.default,
    PubliqInvalidPrivateKey_1.default,
    PubliqInvalidSignature_1.default,
    PubliqInvalidAuthority_1.default,
    PubliqNotEnoughBalance_1.default,
    PubliqTooLongString_1.default,
    PubliqUriError_1.default,
    PubliqResponseCodeReserve1_1.default,
    PubliqResponseCodeReserve2_1.default,
    PubliqResponseCodeReserve3_1.default,
    PubliqResponseCodeReserve4_1.default,
    PubliqResponseCodeReserve5_1.default,
    PubliqResponseCodeReserve6_1.default,
    PubliqResponseCodeReserve7_1.default,
    PubliqResponseCodeReserve8_1.default,
    PubliqResponseCodeReserve9_1.default,
    PubliqResponseCodeReserve10_1.default,
    PubliqRemoteError_1.default,
    PubliqStorageFile_1.default,
    PubliqStorageFileDelete_1.default,
    PubliqStorageFileAddress_1.default,
    PubliqStorageFileRequest_1.default,
    PubliqStorageFileDetails_1.default,
    PubliqStorageFileDetailsResponse_1.default,
    PubliqGenericModelReserve1_1.default,
    PubliqGenericModelReserve2_1.default,
    PubliqGenericModelReserve3_1.default,
    PubliqGenericModelReserve4_1.default,
    PubliqGenericModelReserve5_1.default,
    PubliqGenericModelReserve6_1.default,
    PubliqGenericModelReserve7_1.default,
    PubliqGenericModelReserve8_1.default,
    PubliqGenericModelReserve9_1.default,
    PubliqGenericModelReserve10_1.default,
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
