import { AisMessageBase } from "./ais-message-base";

export class AisMessage26 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(26, payloadBits);
    }
}
