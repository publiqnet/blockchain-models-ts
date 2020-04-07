export default class PubliqSponsorType {

    public static readonly all = 0;
    public static readonly global = 1;
    public static readonly article = 2;

    static toString(param: number): string {

        switch (param) {
            case 0: return "all";
            case 1: return "global";
            case 2: return "article";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "all": return 0;
            case "global": return 1;
            case "article": return 2;
        }
    } 

} 
