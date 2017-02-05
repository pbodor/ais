import { AisMessageBase } from "./ais-message-base";

export class AisMessage12 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(12, payloadBits);
    }
}
