import PubliqContent from '../models/PubliqContent';

const x =  new PubliqContent({
    contentId: 1,
    channelAddress: "",
    contentUnitUris: ['aaa']
});

console.log(x.toJson());