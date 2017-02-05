import { AisMessageBase } from "./ais-message-base";

export class AisMessage24 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(24, payloadBits);
    }
}
