import { AisMessageBase } from "./ais-message-base";

export class AisMessage19 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(19, payloadBits);
    }
}
