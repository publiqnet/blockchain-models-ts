export default class PubliqInfoType {

    public static readonly store = 0;
    public static readonly reject = 1;

    static toString(param: number): string {

        switch (param) {
            case 0: return "store";
            case 1: return "reject";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "store": return 0;
            case "reject": return 1;
        }
    } 

} 
