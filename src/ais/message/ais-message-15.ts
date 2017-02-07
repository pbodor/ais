import { AisMessageBase } from "./ais-message-base";

export class AisMessage15 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(15, payloadBits);
    }
    get mmsi1(): number { return super.toInt(40, 30); }
    get type1_1(): number { return super.toInt(70, 6); }
    get offset1_1(): number { return super.toInt(76, 12); }
    get type1_2(): number { return super.toInt(90, 6); }
    get offset1_2(): number { return super.toInt(96, 12); }
    get mmsi2(): number { return super.toInt(110, 30); }
    get type2_1(): number { return super.toInt(140, 6); }
    get offset2_1(): number { return super.toInt(146, 12); }
}
