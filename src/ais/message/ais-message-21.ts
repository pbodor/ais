import { AisMessageBase } from "./ais-message-base";

export class AisMessage21 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(21, payloadBits);
    }
}
