import { AisMessageBase } from "./ais-message-base";

export class AisMessage13 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(13, payloadBits);
    }
}
