export default class PubliqPublicAddressType {

    public static readonly p2p = 0;
    public static readonly rpc = 1;

    static toString(param: number): string {

        switch (param) {
            case 0: return "p2p";
            case 1: return "rpc";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "p2p": return 0;
            case "rpc": return 1;
        }
    } 

} 
