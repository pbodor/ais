import { AisMessageBase } from "./ais-message-base";

export class AisMessage15 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(15, payloadBits);
    }
}
