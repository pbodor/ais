import { AisMessageBase } from "./ais-message-base";

export class AisMessage08 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(8, payloadBits);
    }
    get designatedAgetCode(): number { return super.toInt(40, 10); }
    get functionalId(): number { return super.toInt(50, 6); }
    get data(): string { return super.toSixBitString(56, 119); }
}
