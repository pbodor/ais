import { AisMessageBase } from "./ais-message-base";

export class AisMessage22 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(22, payloadBits);
    }
}
