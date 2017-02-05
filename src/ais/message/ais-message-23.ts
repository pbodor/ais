import { AisMessageBase } from "./ais-message-base";

export class AisMessage23 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(23, payloadBits);
    }
}
