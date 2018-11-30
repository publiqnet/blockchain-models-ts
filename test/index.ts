import {parceToModel} from "../mapper";
import {JSON_DATA} from "./test-data";

for (let data in JSON_DATA) {
    console.log(parceToModel(JSON.stringify(JSON_DATA[data])));
}

