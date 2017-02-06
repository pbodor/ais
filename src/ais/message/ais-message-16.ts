import { AisMessageBase } from "./ais-message-base";

export class AisMessage16 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(16, payloadBits);
    }
    get destinationAMmsi(): number { return super.toInt(40, 30); }
    get offsetA(): number { return super.toInt(70, 12); }
    get incrementA(): number { return super.toInt(82, 10); }
    get destinationBMmsi(): number { return super.toInt(92, 30); }
    get offsetB(): number { return super.toInt(122, 12); }
    get incrementB(): number { return super.toInt(134, 10); }
}
