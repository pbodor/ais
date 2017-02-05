import { AisMessageBase } from "./ais-message-base";

export class AisMessage08 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(8, payloadBits);
    }
}
