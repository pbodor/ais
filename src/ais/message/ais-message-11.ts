import { AisMessageBase } from "./ais-message-base";

export class AisMessage11 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(11, payloadBits);
    }
}
