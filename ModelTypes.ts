import PubliqCoin from './models/PubliqCoin';
import PubliqBroadcast from './models/PubliqBroadcast';
import PubliqReward from './models/PubliqReward';
import PubliqTransfer from './models/PubliqTransfer';
import PubliqFile from './models/PubliqFile';
import PubliqPage from './models/PubliqPage';
import PubliqTransaction from './models/PubliqTransaction';
import PubliqSignedTransaction from './models/PubliqSignedTransaction';
import PubliqBlockHeader from './models/PubliqBlockHeader';
import PubliqBlock from './models/PubliqBlock';
import PubliqSignedBlock from './models/PubliqSignedBlock';
import PubliqDigestRequest from './models/PubliqDigestRequest';
import PubliqDigest from './models/PubliqDigest';
import PubliqLoggedTransaction from './models/PubliqLoggedTransaction';
import PubliqLoggedTransactionsRequest from './models/PubliqLoggedTransactionsRequest';
import PubliqLoggedTransactions from './models/PubliqLoggedTransactions';
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
import PubliqBlockChainRequest from './models/PubliqBlockChainRequest';
import PubliqBlockChainResponse from './models/PubliqBlockChainResponse';
import PubliqDone from './models/PubliqDone';
import PubliqInvalidPublicKey from './models/PubliqInvalidPublicKey';
import PubliqInvalidPrivateKey from './models/PubliqInvalidPrivateKey';
import PubliqInvalidSignature from './models/PubliqInvalidSignature';
import PubliqInvalidAuthority from './models/PubliqInvalidAuthority';
import PubliqFileNotFound from './models/PubliqFileNotFound';
import PubliqRemoteError from './models/PubliqRemoteError';
import PubliqBlockInfo from './models/PubliqBlockInfo';
import PubliqRewardInfo from './models/PubliqRewardInfo';
import PubliqTransactionInfo from './models/PubliqTransactionInfo';
import PubliqStorageFile from './models/PubliqStorageFile';
import PubliqStorageFileAddress from './models/PubliqStorageFileAddress';


const MODELS_TYPES = [ 
    PubliqCoin,
    PubliqBroadcast,
    PubliqReward,
    PubliqTransfer,
    PubliqFile,
    PubliqPage,
    PubliqTransaction,
    PubliqSignedTransaction,
    PubliqBlockHeader,
    PubliqBlock,
    PubliqSignedBlock,
    PubliqDigestRequest,
    PubliqDigest,
    PubliqLoggedTransaction,
    PubliqLoggedTransactionsRequest,
    PubliqLoggedTransactions,
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
    PubliqBlockChainRequest,
    PubliqBlockChainResponse,
    PubliqDone,
    PubliqInvalidPublicKey,
    PubliqInvalidPrivateKey,
    PubliqInvalidSignature,
    PubliqInvalidAuthority,
    PubliqFileNotFound,
    PubliqRemoteError,
    PubliqBlockInfo,
    PubliqRewardInfo,
    PubliqTransactionInfo,
    PubliqStorageFile,
    PubliqStorageFileAddress,
];

export const createInstanceFromJson = data => {

    if(data.constructor.Rtt !== undefined){
        return  data;
    }

    const ModelClass = MODELS_TYPES[data.rtt];

    if(!ModelClass){
        throw new Error("invalid model class");
    }

    return new ModelClass(data);

};

export default MODELS_TYPES;