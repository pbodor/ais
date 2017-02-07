import { AisMessageBase } from "./ais-message-base";

export class AisMessage16 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(16, payloadBits);
    }
    get mmsi1(): number { return super.toInt(40, 30); }
    get offset1(): number { return super.toInt(70, 12); }
    get increment1(): number { return super.toInt(82, 10); }
    get mmsi2(): number { return super.toInt(92, 30); }
    get offset2(): number { return super.toInt(122, 12); }
    get increment2(): number { return super.toInt(134, 10); }
}
