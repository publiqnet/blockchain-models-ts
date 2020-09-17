"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqAPICoin_1 = require("./models/PubliqAPICoin");
var PubliqAPIBroadcast_1 = require("./models/PubliqAPIBroadcast");
var PubliqAPITransaction_1 = require("./models/PubliqAPITransaction");
var PubliqAPIAuthority_1 = require("./models/PubliqAPIAuthority");
var PubliqAPISignedTransaction_1 = require("./models/PubliqAPISignedTransaction");
var PubliqAPIBlockHeader_1 = require("./models/PubliqAPIBlockHeader");
var PubliqAPIBlockHeaderExtended_1 = require("./models/PubliqAPIBlockHeaderExtended");
var PubliqAPIBlock_1 = require("./models/PubliqAPIBlock");
var PubliqAPISignedBlock_1 = require("./models/PubliqAPISignedBlock");
var PubliqAPIRewardLog_1 = require("./models/PubliqAPIRewardLog");
var PubliqAPITransactionLog_1 = require("./models/PubliqAPITransactionLog");
var PubliqAPIBlockLog_1 = require("./models/PubliqAPIBlockLog");
var PubliqAPIReward_1 = require("./models/PubliqAPIReward");
var PubliqAPITransfer_1 = require("./models/PubliqAPITransfer");
var PubliqAPIAuthorizationUpdate_1 = require("./models/PubliqAPIAuthorizationUpdate");
var PubliqAPITransactionReserve2_1 = require("./models/PubliqAPITransactionReserve2");
var PubliqAPITransactionReserve3_1 = require("./models/PubliqAPITransactionReserve3");
var PubliqAPITransactionReserve4_1 = require("./models/PubliqAPITransactionReserve4");
var PubliqAPITransactionReserve5_1 = require("./models/PubliqAPITransactionReserve5");
var PubliqAPITransactionReserve6_1 = require("./models/PubliqAPITransactionReserve6");
var PubliqAPITransactionReserve7_1 = require("./models/PubliqAPITransactionReserve7");
var PubliqAPITransactionReserve8_1 = require("./models/PubliqAPITransactionReserve8");
var PubliqAPITransactionReserve9_1 = require("./models/PubliqAPITransactionReserve9");
var PubliqAPITransactionReserve10_1 = require("./models/PubliqAPITransactionReserve10");
var PubliqAPITransactionReserve11_1 = require("./models/PubliqAPITransactionReserve11");
var PubliqAPITransactionReserve12_1 = require("./models/PubliqAPITransactionReserve12");
var PubliqAPITransactionReserve13_1 = require("./models/PubliqAPITransactionReserve13");
var PubliqAPITransactionReserve14_1 = require("./models/PubliqAPITransactionReserve14");
var PubliqAPITransactionReserve15_1 = require("./models/PubliqAPITransactionReserve15");
var PubliqAPIFile_1 = require("./models/PubliqAPIFile");
var PubliqAPIContentUnit_1 = require("./models/PubliqAPIContentUnit");
var PubliqAPIContent_1 = require("./models/PubliqAPIContent");
var PubliqAPIRole_1 = require("./models/PubliqAPIRole");
var PubliqAPIAddressInfo_1 = require("./models/PubliqAPIAddressInfo");
var PubliqAPIStorageUpdate_1 = require("./models/PubliqAPIStorageUpdate");
var PubliqAPIServiceStatistics_1 = require("./models/PubliqAPIServiceStatistics");
var PubliqAPIServiceStatisticsFile_1 = require("./models/PubliqAPIServiceStatisticsFile");
var PubliqAPIServiceStatisticsCount_1 = require("./models/PubliqAPIServiceStatisticsCount");
var PubliqAPISponsorContentUnit_1 = require("./models/PubliqAPISponsorContentUnit");
var PubliqAPICancelSponsorContentUnit_1 = require("./models/PubliqAPICancelSponsorContentUnit");
var PubliqAPITransactionReserve18_1 = require("./models/PubliqAPITransactionReserve18");
var PubliqAPITransactionReserve19_1 = require("./models/PubliqAPITransactionReserve19");
var PubliqAPITransactionReserve20_1 = require("./models/PubliqAPITransactionReserve20");
var PubliqAPITransactionReserve21_1 = require("./models/PubliqAPITransactionReserve21");
var PubliqAPITransactionReserve22_1 = require("./models/PubliqAPITransactionReserve22");
var PubliqAPITransactionReserve23_1 = require("./models/PubliqAPITransactionReserve23");
var PubliqAPITransactionReserve24_1 = require("./models/PubliqAPITransactionReserve24");
var PubliqAPITransactionReserve25_1 = require("./models/PubliqAPITransactionReserve25");
var PubliqAPIIPDestination_1 = require("./models/PubliqAPIIPDestination");
var PubliqAPIIPAddress_1 = require("./models/PubliqAPIIPAddress");
var PubliqAPIPing_1 = require("./models/PubliqAPIPing");
var PubliqAPIPong_1 = require("./models/PubliqAPIPong");
var PubliqAPIDigestRequest_1 = require("./models/PubliqAPIDigestRequest");
var PubliqAPIDigest_1 = require("./models/PubliqAPIDigest");
var PubliqAPILoggedTransactionsRequest_1 = require("./models/PubliqAPILoggedTransactionsRequest");
var PubliqAPILoggedTransactions_1 = require("./models/PubliqAPILoggedTransactions");
var PubliqAPILoggedTransaction_1 = require("./models/PubliqAPILoggedTransaction");
var PubliqAPIMasterKeyRequest_1 = require("./models/PubliqAPIMasterKeyRequest");
var PubliqAPIMasterKey_1 = require("./models/PubliqAPIMasterKey");
var PubliqAPIKeyPairRequest_1 = require("./models/PubliqAPIKeyPairRequest");
var PubliqAPIKeyPair_1 = require("./models/PubliqAPIKeyPair");
var PubliqAPISignRequest_1 = require("./models/PubliqAPISignRequest");
var PubliqAPISignature_1 = require("./models/PubliqAPISignature");
var PubliqAPITransactionBroadcastRequest_1 = require("./models/PubliqAPITransactionBroadcastRequest");
var PubliqAPITransactionDone_1 = require("./models/PubliqAPITransactionDone");
var PubliqAPIApiReserve1_1 = require("./models/PubliqAPIApiReserve1");
var PubliqAPIApiReserve2_1 = require("./models/PubliqAPIApiReserve2");
var PubliqAPIApiReserve3_1 = require("./models/PubliqAPIApiReserve3");
var PubliqAPIApiReserve4_1 = require("./models/PubliqAPIApiReserve4");
var PubliqAPISyncRequest_1 = require("./models/PubliqAPISyncRequest");
var PubliqAPISyncResponse_1 = require("./models/PubliqAPISyncResponse");
var PubliqAPIBlockHeaderRequest_1 = require("./models/PubliqAPIBlockHeaderRequest");
var PubliqAPIBlockHeaderResponse_1 = require("./models/PubliqAPIBlockHeaderResponse");
var PubliqAPIBlockchainRequest_1 = require("./models/PubliqAPIBlockchainRequest");
var PubliqAPIBlockchainResponse_1 = require("./models/PubliqAPIBlockchainResponse");
var PubliqAPIPublicAddressesRequest_1 = require("./models/PubliqAPIPublicAddressesRequest");
var PubliqAPIPublicAddressesInfo_1 = require("./models/PubliqAPIPublicAddressesInfo");
var PubliqAPIPublicAddressInfo_1 = require("./models/PubliqAPIPublicAddressInfo");
var PubliqAPIIncompleteTransactionsRequest_1 = require("./models/PubliqAPIIncompleteTransactionsRequest");
var PubliqAPIIncompleteTransactions_1 = require("./models/PubliqAPIIncompleteTransactions");
var PubliqAPIServed_1 = require("./models/PubliqAPIServed");
var PubliqAPIContentUnitImpactLog_1 = require("./models/PubliqAPIContentUnitImpactLog");
var PubliqAPIContentUnitImpactPerChannel_1 = require("./models/PubliqAPIContentUnitImpactPerChannel");
var PubliqAPISponsorContentUnitApplied_1 = require("./models/PubliqAPISponsorContentUnitApplied");
var PubliqAPIFileUrisRequest_1 = require("./models/PubliqAPIFileUrisRequest");
var PubliqAPIFileUris_1 = require("./models/PubliqAPIFileUris");
var PubliqAPIApiReserve10_1 = require("./models/PubliqAPIApiReserve10");
var PubliqAPIApiReserve11_1 = require("./models/PubliqAPIApiReserve11");
var PubliqAPIDone_1 = require("./models/PubliqAPIDone");
var PubliqAPIInvalidPublicKey_1 = require("./models/PubliqAPIInvalidPublicKey");
var PubliqAPIInvalidPrivateKey_1 = require("./models/PubliqAPIInvalidPrivateKey");
var PubliqAPIInvalidSignature_1 = require("./models/PubliqAPIInvalidSignature");
var PubliqAPIInvalidAuthority_1 = require("./models/PubliqAPIInvalidAuthority");
var PubliqAPINotEnoughBalance_1 = require("./models/PubliqAPINotEnoughBalance");
var PubliqAPITooLongString_1 = require("./models/PubliqAPITooLongString");
var PubliqAPIUriError_1 = require("./models/PubliqAPIUriError");
var PubliqAPITransactionPoolFull_1 = require("./models/PubliqAPITransactionPoolFull");
var PubliqAPIResponseCodeReserve2_1 = require("./models/PubliqAPIResponseCodeReserve2");
var PubliqAPIResponseCodeReserve3_1 = require("./models/PubliqAPIResponseCodeReserve3");
var PubliqAPIResponseCodeReserve4_1 = require("./models/PubliqAPIResponseCodeReserve4");
var PubliqAPIResponseCodeReserve5_1 = require("./models/PubliqAPIResponseCodeReserve5");
var PubliqAPIResponseCodeReserve6_1 = require("./models/PubliqAPIResponseCodeReserve6");
var PubliqAPIResponseCodeReserve7_1 = require("./models/PubliqAPIResponseCodeReserve7");
var PubliqAPIResponseCodeReserve8_1 = require("./models/PubliqAPIResponseCodeReserve8");
var PubliqAPIResponseCodeReserve9_1 = require("./models/PubliqAPIResponseCodeReserve9");
var PubliqAPIResponseCodeReserve10_1 = require("./models/PubliqAPIResponseCodeReserve10");
var PubliqAPIRemoteError_1 = require("./models/PubliqAPIRemoteError");
var PubliqAPIStorageFile_1 = require("./models/PubliqAPIStorageFile");
var PubliqAPIStorageFileDelete_1 = require("./models/PubliqAPIStorageFileDelete");
var PubliqAPIStorageFileAddress_1 = require("./models/PubliqAPIStorageFileAddress");
var PubliqAPIStorageFileRequest_1 = require("./models/PubliqAPIStorageFileRequest");
var PubliqAPIStorageFileDetails_1 = require("./models/PubliqAPIStorageFileDetails");
var PubliqAPIStorageFileDetailsResponse_1 = require("./models/PubliqAPIStorageFileDetailsResponse");
var PubliqAPIStorageUpdateCommand_1 = require("./models/PubliqAPIStorageUpdateCommand");
var PubliqAPILetter_1 = require("./models/PubliqAPILetter");
var PubliqAPICheckInbox_1 = require("./models/PubliqAPICheckInbox");
var PubliqAPIInbox_1 = require("./models/PubliqAPIInbox");
var PubliqAPIConfig_1 = require("./models/PubliqAPIConfig");
var PubliqAPIConfigKeyUpdate_1 = require("./models/PubliqAPIConfigKeyUpdate");
var PubliqAPIPublicKeyRequest_1 = require("./models/PubliqAPIPublicKeyRequest");
var PubliqAPIPublicKeyResponse_1 = require("./models/PubliqAPIPublicKeyResponse");
var PubliqAPIEncrypt_1 = require("./models/PubliqAPIEncrypt");
var PubliqAPIEncryptedMessage_1 = require("./models/PubliqAPIEncryptedMessage");
var PubliqAPIDecrypt_1 = require("./models/PubliqAPIDecrypt");
var PubliqAPIDecryptedMessage_1 = require("./models/PubliqAPIDecryptedMessage");
var PubliqAPIGenericModelReserve1_1 = require("./models/PubliqAPIGenericModelReserve1");
var PubliqAPIGenericModelReserve2_1 = require("./models/PubliqAPIGenericModelReserve2");
var PubliqAPIGenericModelReserve3_1 = require("./models/PubliqAPIGenericModelReserve3");
var PubliqAPIGenericModelReserve4_1 = require("./models/PubliqAPIGenericModelReserve4");
var PubliqAPIGenericModelReserve5_1 = require("./models/PubliqAPIGenericModelReserve5");
var PubliqAPIGenericModelReserve6_1 = require("./models/PubliqAPIGenericModelReserve6");
var PubliqAPIGenericModelReserve7_1 = require("./models/PubliqAPIGenericModelReserve7");
var PubliqAPIGenericModelReserve8_1 = require("./models/PubliqAPIGenericModelReserve8");
var PubliqAPIGenericModelReserve9_1 = require("./models/PubliqAPIGenericModelReserve9");
var PubliqAPIGenericModelReserve10_1 = require("./models/PubliqAPIGenericModelReserve10");
var MODELS_TYPES = [
    PubliqAPICoin_1.default,
    PubliqAPIBroadcast_1.default,
    PubliqAPITransaction_1.default,
    PubliqAPIAuthority_1.default,
    PubliqAPISignedTransaction_1.default,
    PubliqAPIBlockHeader_1.default,
    PubliqAPIBlockHeaderExtended_1.default,
    PubliqAPIBlock_1.default,
    PubliqAPISignedBlock_1.default,
    PubliqAPIRewardLog_1.default,
    PubliqAPITransactionLog_1.default,
    PubliqAPIBlockLog_1.default,
    PubliqAPIReward_1.default,
    PubliqAPITransfer_1.default,
    PubliqAPIAuthorizationUpdate_1.default,
    PubliqAPITransactionReserve2_1.default,
    PubliqAPITransactionReserve3_1.default,
    PubliqAPITransactionReserve4_1.default,
    PubliqAPITransactionReserve5_1.default,
    PubliqAPITransactionReserve6_1.default,
    PubliqAPITransactionReserve7_1.default,
    PubliqAPITransactionReserve8_1.default,
    PubliqAPITransactionReserve9_1.default,
    PubliqAPITransactionReserve10_1.default,
    PubliqAPITransactionReserve11_1.default,
    PubliqAPITransactionReserve12_1.default,
    PubliqAPITransactionReserve13_1.default,
    PubliqAPITransactionReserve14_1.default,
    PubliqAPITransactionReserve15_1.default,
    PubliqAPIFile_1.default,
    PubliqAPIContentUnit_1.default,
    PubliqAPIContent_1.default,
    PubliqAPIRole_1.default,
    PubliqAPIAddressInfo_1.default,
    PubliqAPIStorageUpdate_1.default,
    PubliqAPIServiceStatistics_1.default,
    PubliqAPIServiceStatisticsFile_1.default,
    PubliqAPIServiceStatisticsCount_1.default,
    PubliqAPISponsorContentUnit_1.default,
    PubliqAPICancelSponsorContentUnit_1.default,
    PubliqAPITransactionReserve18_1.default,
    PubliqAPITransactionReserve19_1.default,
    PubliqAPITransactionReserve20_1.default,
    PubliqAPITransactionReserve21_1.default,
    PubliqAPITransactionReserve22_1.default,
    PubliqAPITransactionReserve23_1.default,
    PubliqAPITransactionReserve24_1.default,
    PubliqAPITransactionReserve25_1.default,
    PubliqAPIIPDestination_1.default,
    PubliqAPIIPAddress_1.default,
    PubliqAPIPing_1.default,
    PubliqAPIPong_1.default,
    PubliqAPIDigestRequest_1.default,
    PubliqAPIDigest_1.default,
    PubliqAPILoggedTransactionsRequest_1.default,
    PubliqAPILoggedTransactions_1.default,
    PubliqAPILoggedTransaction_1.default,
    PubliqAPIMasterKeyRequest_1.default,
    PubliqAPIMasterKey_1.default,
    PubliqAPIKeyPairRequest_1.default,
    PubliqAPIKeyPair_1.default,
    PubliqAPISignRequest_1.default,
    PubliqAPISignature_1.default,
    PubliqAPITransactionBroadcastRequest_1.default,
    PubliqAPITransactionDone_1.default,
    PubliqAPIApiReserve1_1.default,
    PubliqAPIApiReserve2_1.default,
    PubliqAPIApiReserve3_1.default,
    PubliqAPIApiReserve4_1.default,
    PubliqAPISyncRequest_1.default,
    PubliqAPISyncResponse_1.default,
    PubliqAPIBlockHeaderRequest_1.default,
    PubliqAPIBlockHeaderResponse_1.default,
    PubliqAPIBlockchainRequest_1.default,
    PubliqAPIBlockchainResponse_1.default,
    PubliqAPIPublicAddressesRequest_1.default,
    PubliqAPIPublicAddressesInfo_1.default,
    PubliqAPIPublicAddressInfo_1.default,
    PubliqAPIIncompleteTransactionsRequest_1.default,
    PubliqAPIIncompleteTransactions_1.default,
    PubliqAPIServed_1.default,
    PubliqAPIContentUnitImpactLog_1.default,
    PubliqAPIContentUnitImpactPerChannel_1.default,
    PubliqAPISponsorContentUnitApplied_1.default,
    PubliqAPIFileUrisRequest_1.default,
    PubliqAPIFileUris_1.default,
    PubliqAPIApiReserve10_1.default,
    PubliqAPIApiReserve11_1.default,
    PubliqAPIDone_1.default,
    PubliqAPIInvalidPublicKey_1.default,
    PubliqAPIInvalidPrivateKey_1.default,
    PubliqAPIInvalidSignature_1.default,
    PubliqAPIInvalidAuthority_1.default,
    PubliqAPINotEnoughBalance_1.default,
    PubliqAPITooLongString_1.default,
    PubliqAPIUriError_1.default,
    PubliqAPITransactionPoolFull_1.default,
    PubliqAPIResponseCodeReserve2_1.default,
    PubliqAPIResponseCodeReserve3_1.default,
    PubliqAPIResponseCodeReserve4_1.default,
    PubliqAPIResponseCodeReserve5_1.default,
    PubliqAPIResponseCodeReserve6_1.default,
    PubliqAPIResponseCodeReserve7_1.default,
    PubliqAPIResponseCodeReserve8_1.default,
    PubliqAPIResponseCodeReserve9_1.default,
    PubliqAPIResponseCodeReserve10_1.default,
    PubliqAPIRemoteError_1.default,
    PubliqAPIStorageFile_1.default,
    PubliqAPIStorageFileDelete_1.default,
    PubliqAPIStorageFileAddress_1.default,
    PubliqAPIStorageFileRequest_1.default,
    PubliqAPIStorageFileDetails_1.default,
    PubliqAPIStorageFileDetailsResponse_1.default,
    PubliqAPIStorageUpdateCommand_1.default,
    PubliqAPILetter_1.default,
    PubliqAPICheckInbox_1.default,
    PubliqAPIInbox_1.default,
    PubliqAPIConfig_1.default,
    PubliqAPIConfigKeyUpdate_1.default,
    PubliqAPIPublicKeyRequest_1.default,
    PubliqAPIPublicKeyResponse_1.default,
    PubliqAPIEncrypt_1.default,
    PubliqAPIEncryptedMessage_1.default,
    PubliqAPIDecrypt_1.default,
    PubliqAPIDecryptedMessage_1.default,
    PubliqAPIGenericModelReserve1_1.default,
    PubliqAPIGenericModelReserve2_1.default,
    PubliqAPIGenericModelReserve3_1.default,
    PubliqAPIGenericModelReserve4_1.default,
    PubliqAPIGenericModelReserve5_1.default,
    PubliqAPIGenericModelReserve6_1.default,
    PubliqAPIGenericModelReserve7_1.default,
    PubliqAPIGenericModelReserve8_1.default,
    PubliqAPIGenericModelReserve9_1.default,
    PubliqAPIGenericModelReserve10_1.default,
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
