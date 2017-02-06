import { AisMessageBase } from "./ais-message-base";

export class AisMessage24 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(24, payloadBits);
    }
    get portNumber(): number { return super.toInt(38, 2); }
    get vesselName(): string { return super.toSixBitString(40, 20); }
    get shipType(): number { return super.toInt(168, 8); }
    get venderId(): number { return super.toInt(176, 7); }
    get callSign(): string { return super.toSixBitString(218, 7); }
    get dimensionToBow(): number { return super.toInt(260, 9); }
    get dimensionToStern(): number { return super.toInt(269, 9); }
    get dimensionToPort(): number { return super.toInt(278, 6); }
    get dimensionToStarboard(): number { return super.toInt(284, 6); }
    get mothershipMmsi(): number { return super.toInt(290, 30); }
}
