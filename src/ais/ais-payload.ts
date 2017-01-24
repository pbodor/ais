export class AisPayload {
    _encoded: string;
    _decoded: number[];

    constructor(encoded: string) {
        this._encoded = encoded;
        this._decoded = this.decode(encoded);
    }

    private decode(encoded: string): number[] {
        let bits: number[] = [];

        let sixBit: number[];
        for (let c of encoded) {
            sixBit = this.getSixBitArray(c.charCodeAt(0));
            Array.prototype.push.apply(bits, sixBit);
        }

        return bits;
    }

    private getSixBitArray(ascii: number): number[] {
        const BIT_NUM: number = 6;
        const decimal: number = this.getDecimal(ascii);
        const result: number[] = [];
        for (let i = BIT_NUM - 1; i >= 0; i--) {
            result.push((decimal >> i) % 2);
        }
        return result;
    }

    private getDecimal(ascii: number): number {
        let result: number = 0;

        if (ascii < 0x30 || ascii > 0x77 || ((ascii > 0x57) && (ascii < 0x60))) {
            throw new Error("Out of range.");
        }
        return result;
    }

    toInt(index: number, length: number): number {
        let result: number = 0;
        const shift = length - 1;
        for (let i = length - 1; i >= 0; i--) {
            result |= (this._decoded[index + i]) << (shift - i);
        }
        return result;
    }

    toBoolean(index: number): boolean {
        return this._decoded[index] === 1;
    }

    toSixBitASCIIString(index: number, charSize: number): string {
        let result: string = "";
        for (let i = 0; i < charSize; i++) {
            result += this.toSixBitASCII(index + i * 6);
        }
        return result;
    }

    toSixBitASCII(index: number): number {
        let result: number = 0;
        const value: number = this.toInt(index, 6);
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
