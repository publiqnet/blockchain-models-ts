
 const dateToFormatString = d => {

      const addZero = d => {
         return d.length == 2 ? d : `0${d}`;
      };

     const year = d.getFullYear().toString();
     const month = (d.getMonth()+1).toString();
     const day = d.getDate().toString();
     const hours = d.getHours().toString();
     const minutes = d.getMinutes().toString();
     const seconds = d.getSeconds().toString();

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

            } else if (constructor === Array){
                propertySetValue = pv.map(d => BaseModel.getDataWithRtt(d));

            } else if(BaseModel.hasRtt(constructor)){
                propertySetValue = BaseModel.getDataWithRtt(pv);

            } else if(constructor === Date) {
                propertySetValue = dateToFormatString(pv);
            }
             else {
                propertySetValue = pv;
            }

            BaseModel.setProperty(i, propertySetValue, dataWithRtt, data.constructor);
        }


        return dataWithRtt;
    }

    toJson() {
        return BaseModel.getDataWithRtt(this);
    }

 }
