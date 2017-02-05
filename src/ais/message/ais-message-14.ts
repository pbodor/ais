import { AisMessageBase } from "./ais-message-base";

export class AisMessage14 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(14, payloadBits);
    }
}
