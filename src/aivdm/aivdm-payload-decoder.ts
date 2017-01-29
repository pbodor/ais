import { AivdmPayload } from "./aivdm-payload";

export abstract class AivdmPayloadDecoder {

    private constructor() { }

    // string->ascii
    static decodeString2Ascii(sentence: string): number[] {
        return sentence.split(AivdmPayload.SEPARATE_CAHR).map((element) => {
            return element.charCodeAt(0);
        });
    }

    static decodeString2Decimal(sentence: string): number[] {
        return sentence.split(AivdmPayload.SEPARATE_CAHR).map((element) => {
            return AivdmPayloadDecoder.decodeAscii2Decimal(element.charCodeAt(0));
        });
    }

    static decodeString2Bits(sentence: string): number[] {
        const decimalArray: number[] = AivdmPayloadDecoder.decodeString2Decimal(sentence);
        let resultArray: number[] = [];
        let bitArray: number[];

        for (let decimal of decimalArray) {
            bitArray = AivdmPayloadDecoder.decodeDecimal2Bits(decimal);
            Array.prototype.push.apply(resultArray, bitArray);
        }

        return resultArray;
    }

    // ascii->decimal
    static decodeAscii2Decimal(ascii: number): number {
        if (!AivdmPayload.isValidAscii(ascii)) {
            throw new Error("Out of range.");
        }

        return (ascii < 0x60) ? (ascii - 0x30) & 0x3F : (ascii - 0x38) & 0x3F;
    }

    // decimal->bits
    static decodeDecimal2Bits(decimal: number): number[] {
        const result: number[] = [];
        for (let i = AivdmPayload.BIT_NUM - 1; i >= 0; i--) {
            result.push((decimal >> i) % 2);
        }
        return result;
    }
}
