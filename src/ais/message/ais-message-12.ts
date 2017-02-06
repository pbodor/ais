import { AisMessageBase } from "./ais-message-base";

export class AisMessage12 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(12, payloadBits);
    }
    get sequenceNumber(): number { return super.toInt(38, 2); }
    get destinationMmsi(): number { return super.toInt(40, 30); }
    get retransmitFrag(): boolean { return super.toBoolean(70); }
    get text(): string { return super.toSixBitString(72, 156); }
}
