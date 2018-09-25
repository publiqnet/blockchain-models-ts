import __Coin from './models/__Coin';
import __Broadcast from './models/__Broadcast';
import __Reward from './models/__Reward';
import __Transfer from './models/__Transfer';
import __File from './models/__File';
import __Page from './models/__Page';
import __Transaction from './models/__Transaction';
import __SignedTransaction from './models/__SignedTransaction';
import __BlockHeader from './models/__BlockHeader';
import __Block from './models/__Block';
import __SignedBlock from './models/__SignedBlock';
import __DigestRequest from './models/__DigestRequest';
import __Digest from './models/__Digest';
import __LoggedTransaction from './models/__LoggedTransaction';
import __LoggedTransactionsRequest from './models/__LoggedTransactionsRequest';
import __LoggedTransactions from './models/__LoggedTransactions';
import __MasterKeyRequest from './models/__MasterKeyRequest';
import __MasterKey from './models/__MasterKey';
import __KeyPairRequest from './models/__KeyPairRequest';
import __KeyPair from './models/__KeyPair';
import __SignRequest from './models/__SignRequest';
import __Signature from './models/__Signature';
import __SyncRequest from './models/__SyncRequest';
import __SyncResponse from './models/__SyncResponse';
import __BlockHeaderRequest from './models/__BlockHeaderRequest';
import __BlockHeaderResponse from './models/__BlockHeaderResponse';
import __BlockChainRequest from './models/__BlockChainRequest';
import __BlockChainResponse from './models/__BlockChainResponse';
import __Done from './models/__Done';
import __InvalidPublicKey from './models/__InvalidPublicKey';
import __InvalidPrivateKey from './models/__InvalidPrivateKey';
import __InvalidSignature from './models/__InvalidSignature';
import __InvalidAuthority from './models/__InvalidAuthority';
import __FileNotFound from './models/__FileNotFound';
import __RemoteError from './models/__RemoteError';
import __LogTransaction from './models/__LogTransaction';
import __RevertLastLoggedAction from './models/__RevertLastLoggedAction';
import __Shutdown from './models/__Shutdown';
import __StorageFile from './models/__StorageFile';
import __StorageFileAddress from './models/__StorageFileAddress';


const MODELS_TYPES = [
    __Coin,
    __Broadcast,
    __Reward,
    __Transfer,
    __File,
    __Page,
    __Transaction,
    __SignedTransaction,
    __BlockHeader,
    __Block,
    __SignedBlock,
    __DigestRequest,
    __Digest,
    __LoggedTransaction,
    __LoggedTransactionsRequest,
    __LoggedTransactions,
    __MasterKeyRequest,
    __MasterKey,
    __KeyPairRequest,
    __KeyPair,
    __SignRequest,
    __Signature,
    __SyncRequest,
    __SyncResponse,
    __BlockHeaderRequest,
    __BlockHeaderResponse,
    __BlockChainRequest,
    __BlockChainResponse,
    __Done,
    __InvalidPublicKey,
    __InvalidPrivateKey,
    __InvalidSignature,
    __InvalidAuthority,
    __FileNotFound,
    __RemoteError,
    __LogTransaction,
    __RevertLastLoggedAction,
    __Shutdown,
    __StorageFile,
    __StorageFileAddress,
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
