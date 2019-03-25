export default class PubliqUpdateType {

    public static readonly store = 0;
    public static readonly remove = 1;

    static toString(param: number): string {

        switch (param) {
            case 0: return "store";
            case 1: return "remove";
        }
    } 

    static toNumber(param: string): number {

        switch (param) {
            case "store": return 0;
            case "remove": return 1;
        }
    } 

} 
