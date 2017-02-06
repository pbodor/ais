import { AisMessageBase } from "./ais-message-base";

export class AisMessage14 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(14, payloadBits);
    }
    get text(): string { return super.toSixBitString(40, 161); }
}
