import {parceToJson, parceToModel} from "../mapper";
import {JSON_DATA} from "./test-data";
import PubliqTransaction from "../models/PubliqTransaction";



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
// tetsJson();


const testPubliqTransaction = () => {
    const now = new Date();
    const now_1h = new Date(now.getTime() + (60 * 60 * 1000));

    const transactionObj = new PubliqTransaction({
        creation: +now,
        expiry: +now_1h,
        fee: {
            whole: 0, fraction: 0
        },
        action: {}//transferObj,
    });
    console.log(transactionObj.toJson())
};

testPubliqTransaction();

