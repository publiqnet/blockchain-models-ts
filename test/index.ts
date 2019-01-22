import {parceToJson, parceToModel} from "../mapper";
import {JSON_DATA} from "./test-data";



const tetsModels = () =>{
    console.log("===================start models===============")
    for (let data in JSON_DATA) {
        console.log(parceToModel(JSON.stringify(JSON_DATA[data])));
    }
}



const tetsJson = () =>{
    console.log("===================start json===============")
    for (let data in JSON_DATA) {
        let obj = parceToModel(JSON.stringify(JSON_DATA[data]));
        console.log( parceToJson(obj), '\n');
    }
};
tetsJson();

