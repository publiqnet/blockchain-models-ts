export default class PubliqRewardType {

    public static readonly initial = 0;
    public static readonly miner = 1;
    public static readonly channel = 2;
    public static readonly storage = 3;
    public static readonly author = 4;

    static toString(param: number): string {

        switch (param) {
            case 0: return "initial";
            case 1: return "miner";
            case 2: return "channel";
            case 3: return "storage";
            case 4: return "author";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "initial": return 0;
            case "miner": return 1;
            case "channel": return 2;
            case "storage": return 3;
            case "author": return 4;
        }
    } 

} 
