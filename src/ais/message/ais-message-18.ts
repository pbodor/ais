import { AisMessageBase } from "./ais-message-base";

export class AisMessage18 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(18, payloadBits);
    }
}
