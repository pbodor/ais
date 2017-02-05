import { AisMessageBase } from "./ais-message-base";

export class AisMessage04 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(4, payloadBits);
    }
}
