import PubliqNodeType from './models/PubliqNodeType';

const dateToFormatString = d => {

     const addZero = d => {
        return d.length == 2 ? d : `0${d}`;
     };

    const year = d.getUTCFullYear().toString();
    const month = (d.getUTCMonth()+1).toString();
    const day = d.getUTCDate().toString();
    const hours = d.getUTCHours().toString();
    const minutes = d.getUTCMinutes().toString();
    const seconds = d.getUTCSeconds().toString();

    return `${
      year
    }-${
      addZero(month)
    }-${
      addZero(day)
    } ${
      addZero(hours)
    }:${
      addZero(minutes)
    }:${
      addZero(seconds)
    }`;

}

export default class BaseModel {

   static get PropertyMap () {
       return {};
   }

   static setProperty (propertyName, propertyValue, toObject, constructor) {
       const PropertyMap = constructor.PropertyMap || BaseModel.PropertyMap;
       const pn = PropertyMap[propertyName] || propertyName;
       toObject[pn] = propertyValue;
   }

   static hasRtt (type) {
       if(type.Rtt !== undefined) {
           return true;
       }
       return false;
   }

   static getRtt (type) {
     return type.Rtt
   }

   static getDataWithRtt(data) {

       if(data.constructor === Date) {
           return dateToFormatString(data);
       }

       if (data.constructor === Array){
           return data.map(d => {
               if(d.constructor !== Function){
                   return  BaseModel.getDataWithRtt(d)
               }
           });
       }

       // if(data.constructor("Publiq")){
       //
       // }

       if(data instanceof Object) {
           let dataWithRtt = {};

           if(BaseModel.hasRtt(data.constructor)){
               dataWithRtt['rtt'] = BaseModel.getRtt(data.constructor);
           }

           for (let i in data) {
               const pv = data[i];
               const constructor = pv.constructor;
                let propertySetValue;

                if(constructor === Function){
                    continue;
                } else if (constructor.name === 'PubliqRole' && !isNaN(pv.nodeType)) {
                    pv.nodeType = PubliqNodeType.toString(pv.nodeType);
                    propertySetValue = pv;
                }
               // else if (constructor === Array){
               //     propertySetValue = pv.map(d => {
               //         if(d.constructor !== Function){
               //             return  BaseModel.getDataWithRtt(d)
               //         }
               //     });
               // }
               // else if(BaseModel.hasRtt(constructor)){
               //     propertySetValue = BaseModel.getDataWithRtt(pv);
               //
               // }
               // else if(constructor === Date) {
               //     propertySetValue = BaseModel.getDataWithRtt(pv);//dateToFormatString(pv);
               // }
               else {
                   propertySetValue = BaseModel.getDataWithRtt(pv);
               }

               BaseModel.setProperty(i, propertySetValue, dataWithRtt, data.constructor);
           }

           return dataWithRtt;
       }

       return data;

   }

   toJson() {
       return BaseModel.getDataWithRtt(this);
   }

}
