import PubliqContent from '../models/PubliqContent';

const x =  new PubliqContent({
    contentId: 1,
    channelAddress: "",
    contentUnitUris: ['aaa']
});

const textJson = {"rtt":2,"creation":"2018-10-23 09:28:20","expiry":"2018-10-23 09:28:20","fee":{"rtt":0,"whole":0,"fraction":100},"action":{}}//{"rtt":23,"private_key":"5JaR5GUf5vsL1QLJXiLN9W4FgjP14HxUYKqKU5gmLbQPN3LDj8R","package":{"rtt":22,"master_key":"ARMEN","index":0,"public_key":"PBQ76Zv5QceNSLibecnMGEKbKo3dVFV6HRuDSuX59mJewJxHPhLwu","private_key":"5Kfu9216aabe2L942As4mGm91MC5RJKHP9tLWr5MMwcgVcRjFuz"}}

console.log(x.toJson());