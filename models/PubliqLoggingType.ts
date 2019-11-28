export default class PubliqLoggingType {

    public static readonly apply = 0;
    public static readonly revert = 1;

    static toString(param: number): string {

        switch (param) {
            case 0: return "apply";
            case 1: return "revert";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "apply": return 0;
            case "revert": return 1;
        }
    } 

} 
