import PubliqCoin from './models/PubliqCoin';
import PubliqBroadcast from './models/PubliqBroadcast';
import PubliqTransaction from './models/PubliqTransaction';
import PubliqAuthority from './models/PubliqAuthority';
import PubliqSignedTransaction from './models/PubliqSignedTransaction';
import PubliqBlockHeader from './models/PubliqBlockHeader';
import PubliqBlockHeaderExtended from './models/PubliqBlockHeaderExtended';
import PubliqBlock from './models/PubliqBlock';
import PubliqSignedBlock from './models/PubliqSignedBlock';
import PubliqRewardLog from './models/PubliqRewardLog';
import PubliqTransactionLog from './models/PubliqTransactionLog';
import PubliqBlockLog from './models/PubliqBlockLog';
import PubliqReward from './models/PubliqReward';
import PubliqTransfer from './models/PubliqTransfer';
import PubliqTransactionReserve1 from './models/PubliqTransactionReserve1';
import PubliqTransactionReserve2 from './models/PubliqTransactionReserve2';
import PubliqTransactionReserve3 from './models/PubliqTransactionReserve3';
import PubliqTransactionReserve4 from './models/PubliqTransactionReserve4';
import PubliqTransactionReserve5 from './models/PubliqTransactionReserve5';
import PubliqFile from './models/PubliqFile';
import PubliqContentUnit from './models/PubliqContentUnit';
import PubliqContent from './models/PubliqContent';
import PubliqRole from './models/PubliqRole';
import PubliqAddressInfo from './models/PubliqAddressInfo';
import PubliqStorageUpdate from './models/PubliqStorageUpdate';
import PubliqServiceStatistics from './models/PubliqServiceStatistics';
import PubliqServiceStatisticsFile from './models/PubliqServiceStatisticsFile';
import PubliqServiceStatisticsCount from './models/PubliqServiceStatisticsCount';
import PubliqTransactionReserve7 from './models/PubliqTransactionReserve7';
import PubliqTransactionReserve8 from './models/PubliqTransactionReserve8';
import PubliqTransactionReserve9 from './models/PubliqTransactionReserve9';
import PubliqTransactionReserve10 from './models/PubliqTransactionReserve10';
import PubliqTransactionReserve11 from './models/PubliqTransactionReserve11';
import PubliqTransactionReserve12 from './models/PubliqTransactionReserve12';
import PubliqTransactionReserve13 from './models/PubliqTransactionReserve13';
import PubliqTransactionReserve14 from './models/PubliqTransactionReserve14';
import PubliqTransactionReserve15 from './models/PubliqTransactionReserve15';
import PubliqIPDestination from './models/PubliqIPDestination';
import PubliqIPAddress from './models/PubliqIPAddress';
import PubliqPing from './models/PubliqPing';
import PubliqPong from './models/PubliqPong';
import PubliqDigestRequest from './models/PubliqDigestRequest';
import PubliqDigest from './models/PubliqDigest';
import PubliqLoggedTransactionsRequest from './models/PubliqLoggedTransactionsRequest';
import PubliqLoggedTransactions from './models/PubliqLoggedTransactions';
import PubliqLoggedTransaction from './models/PubliqLoggedTransaction';
import PubliqMasterKeyRequest from './models/PubliqMasterKeyRequest';
import PubliqMasterKey from './models/PubliqMasterKey';
import PubliqKeyPairRequest from './models/PubliqKeyPairRequest';
import PubliqKeyPair from './models/PubliqKeyPair';
import PubliqSignRequest from './models/PubliqSignRequest';
import PubliqSignature from './models/PubliqSignature';
import PubliqTransactionBroadcastRequest from './models/PubliqTransactionBroadcastRequest';
import PubliqTransactionDone from './models/PubliqTransactionDone';
import PubliqApiReserve1 from './models/PubliqApiReserve1';
import PubliqApiReserve2 from './models/PubliqApiReserve2';
import PubliqApiReserve3 from './models/PubliqApiReserve3';
import PubliqApiReserve4 from './models/PubliqApiReserve4';
import PubliqSyncRequest from './models/PubliqSyncRequest';
import PubliqSyncResponse from './models/PubliqSyncResponse';
import PubliqBlockHeaderRequest from './models/PubliqBlockHeaderRequest';
import PubliqBlockHeaderResponse from './models/PubliqBlockHeaderResponse';
import PubliqBlockchainRequest from './models/PubliqBlockchainRequest';
import PubliqBlockchainResponse from './models/PubliqBlockchainResponse';
import PubliqPublicAddressesRequest from './models/PubliqPublicAddressesRequest';
import PubliqPublicAddressesInfo from './models/PubliqPublicAddressesInfo';
import PubliqPublicAddressInfo from './models/PubliqPublicAddressInfo';
import PubliqIncompleteTransactionsRequest from './models/PubliqIncompleteTransactionsRequest';
import PubliqIncompleteTransactions from './models/PubliqIncompleteTransactions';
import PubliqServed from './models/PubliqServed';
import PubliqApiReserve5 from './models/PubliqApiReserve5';
import PubliqApiReserve6 from './models/PubliqApiReserve6';
import PubliqApiReserve7 from './models/PubliqApiReserve7';
import PubliqApiReserve8 from './models/PubliqApiReserve8';
import PubliqApiReserve9 from './models/PubliqApiReserve9';
import PubliqApiReserve10 from './models/PubliqApiReserve10';
import PubliqApiReserve11 from './models/PubliqApiReserve11';
import PubliqDone from './models/PubliqDone';
import PubliqInvalidPublicKey from './models/PubliqInvalidPublicKey';
import PubliqInvalidPrivateKey from './models/PubliqInvalidPrivateKey';
import PubliqInvalidSignature from './models/PubliqInvalidSignature';
import PubliqInvalidAuthority from './models/PubliqInvalidAuthority';
import PubliqNotEnoughBalance from './models/PubliqNotEnoughBalance';
import PubliqTooLongString from './models/PubliqTooLongString';
import PubliqUriError from './models/PubliqUriError';
import PubliqResponseCodeReserve1 from './models/PubliqResponseCodeReserve1';
import PubliqResponseCodeReserve2 from './models/PubliqResponseCodeReserve2';
import PubliqResponseCodeReserve3 from './models/PubliqResponseCodeReserve3';
import PubliqResponseCodeReserve4 from './models/PubliqResponseCodeReserve4';
import PubliqResponseCodeReserve5 from './models/PubliqResponseCodeReserve5';
import PubliqResponseCodeReserve6 from './models/PubliqResponseCodeReserve6';
import PubliqResponseCodeReserve7 from './models/PubliqResponseCodeReserve7';
import PubliqResponseCodeReserve8 from './models/PubliqResponseCodeReserve8';
import PubliqResponseCodeReserve9 from './models/PubliqResponseCodeReserve9';
import PubliqResponseCodeReserve10 from './models/PubliqResponseCodeReserve10';
import PubliqRemoteError from './models/PubliqRemoteError';
import PubliqStorageFile from './models/PubliqStorageFile';
import PubliqStorageFileDelete from './models/PubliqStorageFileDelete';
import PubliqStorageFileAddress from './models/PubliqStorageFileAddress';
import PubliqStorageFileRequest from './models/PubliqStorageFileRequest';
import PubliqStorageFileSize from './models/PubliqStorageFileSize';
import PubliqStorageFileSizeResponse from './models/PubliqStorageFileSizeResponse';
import PubliqGenericModelReserve1 from './models/PubliqGenericModelReserve1';
import PubliqGenericModelReserve2 from './models/PubliqGenericModelReserve2';
import PubliqGenericModelReserve3 from './models/PubliqGenericModelReserve3';
import PubliqGenericModelReserve4 from './models/PubliqGenericModelReserve4';
import PubliqGenericModelReserve5 from './models/PubliqGenericModelReserve5';
import PubliqGenericModelReserve6 from './models/PubliqGenericModelReserve6';
import PubliqGenericModelReserve7 from './models/PubliqGenericModelReserve7';
import PubliqGenericModelReserve8 from './models/PubliqGenericModelReserve8';
import PubliqGenericModelReserve9 from './models/PubliqGenericModelReserve9';
import PubliqGenericModelReserve10 from './models/PubliqGenericModelReserve10';


const MODELS_TYPES = [ 
    PubliqCoin,
    PubliqBroadcast,
    PubliqTransaction,
    PubliqAuthority,
    PubliqSignedTransaction,
    PubliqBlockHeader,
    PubliqBlockHeaderExtended,
    PubliqBlock,
    PubliqSignedBlock,
    PubliqRewardLog,
    PubliqTransactionLog,
    PubliqBlockLog,
    PubliqReward,
    PubliqTransfer,
    PubliqTransactionReserve1,
    PubliqTransactionReserve2,
    PubliqTransactionReserve3,
    PubliqTransactionReserve4,
    PubliqTransactionReserve5,
    PubliqFile,
    PubliqContentUnit,
    PubliqContent,
    PubliqRole,
    PubliqAddressInfo,
    PubliqStorageUpdate,
    PubliqServiceStatistics,
    PubliqServiceStatisticsFile,
    PubliqServiceStatisticsCount,
    PubliqTransactionReserve7,
    PubliqTransactionReserve8,
    PubliqTransactionReserve9,
    PubliqTransactionReserve10,
    PubliqTransactionReserve11,
    PubliqTransactionReserve12,
    PubliqTransactionReserve13,
    PubliqTransactionReserve14,
    PubliqTransactionReserve15,
    PubliqIPDestination,
    PubliqIPAddress,
    PubliqPing,
    PubliqPong,
    PubliqDigestRequest,
    PubliqDigest,
    PubliqLoggedTransactionsRequest,
    PubliqLoggedTransactions,
    PubliqLoggedTransaction,
    PubliqMasterKeyRequest,
    PubliqMasterKey,
    PubliqKeyPairRequest,
    PubliqKeyPair,
    PubliqSignRequest,
    PubliqSignature,
    PubliqTransactionBroadcastRequest,
    PubliqTransactionDone,
    PubliqApiReserve1,
    PubliqApiReserve2,
    PubliqApiReserve3,
    PubliqApiReserve4,
    PubliqSyncRequest,
    PubliqSyncResponse,
    PubliqBlockHeaderRequest,
    PubliqBlockHeaderResponse,
    PubliqBlockchainRequest,
    PubliqBlockchainResponse,
    PubliqPublicAddressesRequest,
    PubliqPublicAddressesInfo,
    PubliqPublicAddressInfo,
    PubliqIncompleteTransactionsRequest,
    PubliqIncompleteTransactions,
    PubliqServed,
    PubliqApiReserve5,
    PubliqApiReserve6,
    PubliqApiReserve7,
    PubliqApiReserve8,
    PubliqApiReserve9,
    PubliqApiReserve10,
    PubliqApiReserve11,
    PubliqDone,
    PubliqInvalidPublicKey,
    PubliqInvalidPrivateKey,
    PubliqInvalidSignature,
    PubliqInvalidAuthority,
    PubliqNotEnoughBalance,
    PubliqTooLongString,
    PubliqUriError,
    PubliqResponseCodeReserve1,
    PubliqResponseCodeReserve2,
    PubliqResponseCodeReserve3,
    PubliqResponseCodeReserve4,
    PubliqResponseCodeReserve5,
    PubliqResponseCodeReserve6,
    PubliqResponseCodeReserve7,
    PubliqResponseCodeReserve8,
    PubliqResponseCodeReserve9,
    PubliqResponseCodeReserve10,
    PubliqRemoteError,
    PubliqStorageFile,
    PubliqStorageFileDelete,
    PubliqStorageFileAddress,
    PubliqStorageFileRequest,
    PubliqStorageFileSize,
    PubliqStorageFileSizeResponse,
    PubliqGenericModelReserve1,
    PubliqGenericModelReserve2,
    PubliqGenericModelReserve3,
    PubliqGenericModelReserve4,
    PubliqGenericModelReserve5,
    PubliqGenericModelReserve6,
    PubliqGenericModelReserve7,
    PubliqGenericModelReserve8,
    PubliqGenericModelReserve9,
    PubliqGenericModelReserve10,
];

export const createInstanceFromJson = data => {

  if(data.constructor.Rtt !== undefined){
      return  data;
  }

  if(data.rtt !== undefined){
      const ModelClass = MODELS_TYPES[data.rtt];

      if(!ModelClass){
          throw new Error("invalid model class");
      }

      return new ModelClass(data);
  }

  return  data;
};

export default MODELS_TYPES;