import { AisMessageBase } from "./ais-message-base";

export class AisMessage10 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(10, payloadBits);
    }
}
