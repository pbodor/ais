import { AisMessageBase } from "./ais-message-base";

export class AisMessage07 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(7, payloadBits);
    }
    get mmsi1(): number { return super.toInt(40, 30); }
    get mmsi2(): number { return super.toInt(72, 30); }
    get mmsi3(): number { return super.toInt(104, 30); }
    get mmsi4(): number { return super.toInt(136, 30); }
}
