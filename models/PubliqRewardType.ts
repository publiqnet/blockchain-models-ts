export default class PubliqRewardType {

    public static readonly initial = 0;
    public static readonly miner = 1;
    public static readonly author = 2;
    public static readonly channel = 3;
    public static readonly storage = 4;

    static toString(param: number): string {

        switch (param) {
            case 0: return "initial";
            case 1: return "miner";
            case 2: return "author";
            case 3: return "channel";
            case 4: return "storage";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "initial": return 0;
            case "miner": return 1;
            case "author": return 2;
            case "channel": return 3;
            case "storage": return 4;
        }
    } 

} 
