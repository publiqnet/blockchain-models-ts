import PubliqStorageOrder from './models/PubliqStorageOrder';
import PubliqSignedStorageOrder from './models/PubliqSignedStorageOrder';
import PubliqAuthority from './models/PubliqAuthority';
import PubliqSignRequest from './models/PubliqSignRequest';
import PubliqVerificationResponse from './models/PubliqVerificationResponse';
import PubliqRemoteError from './models/PubliqRemoteError';


const MODELS_TYPES = [ 
    PubliqStorageOrder,
    PubliqSignedStorageOrder,
    PubliqAuthority,
    PubliqSignRequest,
    PubliqVerificationResponse,
    PubliqRemoteError,
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