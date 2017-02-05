export class AisPayloadDataConverter {
    private constructor() { }

    static toInt(payload: number[], index: number, length: number): number {
        let result: number = 0;
        const shift = length - 1;
        for (let i = length - 1; i >= 0; i--) {
            result |= (payload[index + i]) << (shift - i);
        }
        return result;
    }

    static toBoolean(payload: number[], index: number): boolean {
        return payload[index] === 1;
    }

    static toSixBitASCIIString(payload: number[], index: number, charSize: number): string {
        let result: string = "";
        for (let i = 0; i < charSize; i++) {
            result += this.toSixBitASCII(payload, index + i * 6);
        }
        return result;
    }

    static toSixBitASCII(payload: number[], index: number): number {
        let result: number = 0;
        const value: number = this.toInt(payload, index, 6);
        if (value > 0x3F) {
            throw new Error(`Value is out of range(${value}).`);
        }

        if (value < 0x20) {
            result = value + 0x40;
        } else {
            result = value;
        }
        return (<any>String).fromCharCode(result); // TIPS:Workaround by casting to any.
    }
}
