export default class PubliqIPType {

    public static readonly any = 0;
    public static readonly ipv4 = 1;
    public static readonly ipv6 = 2;

    static toString(param: number): string {

        switch (param) {
            case 0: return "any";
            case 1: return "ipv4";
            case 2: return "ipv6";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "any": return 0;
            case "ipv4": return 1;
            case "ipv6": return 2;
        }
    } 

} 
