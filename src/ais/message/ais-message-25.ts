import { AisMessageBase } from "./ais-message-base";

export class AisMessage25 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(25, payloadBits);
    }
}
