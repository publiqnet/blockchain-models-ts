export default class PubliqNodeType {

    public static readonly blockchain = 0;
    public static readonly channel = 1;
    public static readonly storage = 2;

    static toString(param: number): string {

        switch (param) {
            case 0: return "blockchain";
            case 1: return "channel";
            case 2: return "storage";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "blockchain": return 0;
            case "channel": return 1;
            case "storage": return 2;
        }
    } 

} 
