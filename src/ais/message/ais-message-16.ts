import { AisMessageBase } from "./ais-message-base";

export class AisMessage16 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(16, payloadBits);
    }
}
