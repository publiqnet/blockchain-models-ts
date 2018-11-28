export default class PubliqNodeType {

    public static readonly miner = 0;
    public static readonly channel = 1;
    public static readonly storage = 2;

    static toString(param: number): string {

        switch (param) {
            case 0: return "miner";
            case 1: return "channel";
            case 2: return "storage";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "miner": return 0;
            case "channel": return 1;
            case "storage": return 2;
        }
    } 

} 
