import { AisMessageBase } from "./ais-message-base";

export class AisMessage17 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(17, payloadBits);
    }
}
