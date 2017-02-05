import { AisMessageBase } from "./ais-message-base";

export class AisMessage20 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(20, payloadBits);
    }
}
