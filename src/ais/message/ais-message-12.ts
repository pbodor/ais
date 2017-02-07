import { AisMessageBase } from "./ais-message-base";

export class AisMessage12 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(12, payloadBits);
    }
    get seqno(): number { return super.toInt(38, 2); }
    get dest_mmsi(): number { return super.toInt(40, 30); }
    get retransmit(): boolean { return super.toBoolean(70); }
    get text(): string { return super.toSixBitString(72, 156); }
}
