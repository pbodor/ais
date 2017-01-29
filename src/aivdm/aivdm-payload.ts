export abstract class AivdmPayload {
    public static readonly SEPARATE_CAHR = "";
    public static readonly BIT_NUM: number = 6;

    private constructor() { }

    static isValidString(sentence: string): boolean {
        let result: boolean = true;
        sentence.split(AivdmPayload.SEPARATE_CAHR).forEach((element) => {
            result = result && AivdmPayload.isValidAscii(element.charCodeAt(0));
        });
        return result;
    }

    static isValidAscii(ascii: number): boolean {
        return !(ascii < 0x30 || ascii > 0x77 || ((ascii > 0x57) && (ascii < 0x60)));
    }
}
