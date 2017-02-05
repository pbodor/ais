import { AisMessageBase } from "./ais-message-base";

export class AisMessage07 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(7, payloadBits);
    }
}
