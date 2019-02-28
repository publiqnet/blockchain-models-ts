import PubliqCoin from './models/PubliqCoin';
import PubliqBroadcast from './models/PubliqBroadcast';
import PubliqTransaction from './models/PubliqTransaction';
import PubliqSignedTransaction from './models/PubliqSignedTransaction';
import PubliqBlockHeader from './models/PubliqBlockHeader';
import PubliqBlock from './models/PubliqBlock';
import PubliqSignedBlock from './models/PubliqSignedBlock';
import PubliqRewardLog from './models/PubliqRewardLog';
import PubliqTransactionLog from './models/PubliqTransactionLog';
import PubliqBlockLog from './models/PubliqBlockLog';
import PubliqReward from './models/PubliqReward';
import PubliqTransfer from './models/PubliqTransfer';
import PubliqFile from './models/PubliqFile';
import PubliqContentUnit from './models/PubliqContentUnit';
import PubliqContent from './models/PubliqContent';
import PubliqRole from './models/PubliqRole';
import PubliqAddressInfo from './models/PubliqAddressInfo';
import PubliqContentInfo from './models/PubliqContentInfo';
import PubliqStatItem from './models/PubliqStatItem';
import PubliqStatInfo from './models/PubliqStatInfo';
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
import PubliqSyncInfo from './models/PubliqSyncInfo';
import PubliqSyncRequest from './models/PubliqSyncRequest';
import PubliqSyncResponse from './models/PubliqSyncResponse';
import PubliqBlockHeaderRequest from './models/PubliqBlockHeaderRequest';
import PubliqBlockHeaderResponse from './models/PubliqBlockHeaderResponse';
import PubliqBlockchainRequest from './models/PubliqBlockchainRequest';
import PubliqBlockchainResponse from './models/PubliqBlockchainResponse';
import PubliqDone from './models/PubliqDone';
import PubliqInvalidPublicKey from './models/PubliqInvalidPublicKey';
import PubliqInvalidPrivateKey from './models/PubliqInvalidPrivateKey';
import PubliqInvalidSignature from './models/PubliqInvalidSignature';
import PubliqInvalidAuthority from './models/PubliqInvalidAuthority';
import PubliqNotEnoughBalance from './models/PubliqNotEnoughBalance';
import PubliqTooLongString from './models/PubliqTooLongString';
import PubliqFileNotFound from './models/PubliqFileNotFound';
import PubliqRemoteError from './models/PubliqRemoteError';
import PubliqStorageFile from './models/PubliqStorageFile';
import PubliqStorageFileAddress from './models/PubliqStorageFileAddress';
import PubliqGetStorageFile from './models/PubliqGetStorageFile';
import PubliqIPDestination from './models/PubliqIPDestination';
import PubliqIPAddress from './models/PubliqIPAddress';
import PubliqPing from './models/PubliqPing';
import PubliqPong from './models/PubliqPong';
import PubliqTaskRequest from './models/PubliqTaskRequest';
import PubliqTaskResponse from './models/PubliqTaskResponse';


const MODELS_TYPES = [ 
    PubliqCoin,
    PubliqBroadcast,
    PubliqTransaction,
    PubliqSignedTransaction,
    PubliqBlockHeader,
    PubliqBlock,
    PubliqSignedBlock,
    PubliqRewardLog,
    PubliqTransactionLog,
    PubliqBlockLog,
    PubliqReward,
    PubliqTransfer,
    PubliqFile,
    PubliqContentUnit,
    PubliqContent,
    PubliqRole,
    PubliqAddressInfo,
    PubliqContentInfo,
    PubliqStatItem,
    PubliqStatInfo,
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
    PubliqSyncInfo,
    PubliqSyncRequest,
    PubliqSyncResponse,
    PubliqBlockHeaderRequest,
    PubliqBlockHeaderResponse,
    PubliqBlockchainRequest,
    PubliqBlockchainResponse,
    PubliqDone,
    PubliqInvalidPublicKey,
    PubliqInvalidPrivateKey,
    PubliqInvalidSignature,
    PubliqInvalidAuthority,
    PubliqNotEnoughBalance,
    PubliqTooLongString,
    PubliqFileNotFound,
    PubliqRemoteError,
    PubliqStorageFile,
    PubliqStorageFileAddress,
    PubliqGetStorageFile,
    PubliqIPDestination,
    PubliqIPAddress,
    PubliqPing,
    PubliqPong,
    PubliqTaskRequest,
    PubliqTaskResponse,
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