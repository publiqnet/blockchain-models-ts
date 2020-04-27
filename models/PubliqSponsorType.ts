export default class PubliqSponsorType {

    public static readonly global = 0;
    public static readonly article = 1;

    static toString(param: number): string {

        switch (param) {
            case 0: return "global";
            case 1: return "article";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "global": return 0;
            case "article": return 1;
        }
    } 

} 
