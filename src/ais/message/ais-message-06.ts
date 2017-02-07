import { AisMessageBase } from "./ais-message-base";

export class AisMessage06 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(6, payloadBits);
    }
    get seqno(): number { return super.toInt(38, 2); }
    get dest_mmsi(): number { return super.toInt(40, 30); }
    get retransmit(): boolean { return super.toBoolean(70); }
    get dac(): number { return super.toInt(72, 10); }
    get fid(): number { return super.toInt(82, 6); }
    get data(): string { return super.toSixBitString(88, 115); }
}
