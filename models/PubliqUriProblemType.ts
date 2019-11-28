export default class PubliqUriProblemType {

    public static readonly missing = 0;
    public static readonly duplicate = 1;
    public static readonly invalid = 2;

    static toString(param: number): string {

        switch (param) {
            case 0: return "missing";
            case 1: return "duplicate";
            case 2: return "invalid";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "missing": return 0;
            case "duplicate": return 1;
            case "invalid": return 2;
        }
    } 

} 
