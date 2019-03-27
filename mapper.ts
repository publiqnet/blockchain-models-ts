import MODELS_TYPES from './ModelTypes';

export const parceToModel = jsonData => {
     const data = JSON.parse(jsonData);
     const ModelClass = MODELS_TYPES[data.rtt];
     if(!ModelClass){
         throw new Error("invalid model class");
     }
     return new ModelClass(data);
};

export const parceToJson = typedData => {
     return JSON.stringify(typedData.toJson())
};
