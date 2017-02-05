import { AisMessageBase } from "./ais-message-base";

export class AisMessage09 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(9, payloadBits);
    }
}
