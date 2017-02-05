import { AisMessageBase } from "./ais-message-base";

export class AisMessage06 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(6, payloadBits);
    }
}
