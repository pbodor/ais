import { AisMessageBase } from "./ais-message-base";

export class AisMessage27 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(27, payloadBits);
    }
}
