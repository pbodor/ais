import { AisMessageBase } from "./ais-message-base";

export class AisMessage06 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(6, payloadBits);
    }
    get sequence(): number { return super.toInt(38, 2); }
    get destinationMmsi(): number { return super.toInt(40, 30); }
    get retransmit(): number { return super.toInt(70, 1); }
    get designatedAreaCode(): number { return super.toInt(72, 10); }
    get funtionalId(): number { return super.toInt(82, 6); }
    get data(): string { return super.toSixBitString(88, 115); }
}
